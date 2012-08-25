import os
from flask import Flask, render_template, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
import sys

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.debug = True
db = SQLAlchemy(app)

DEBUG = True 
TEMPLATE_DEBUG = DEBUG

class Natindex(db.Model):
  __tablename__ = 'natindex'
  id = db.Column(db.Integer, primary_key=True)
  country = db.Column(db.String(256), unique=True)
  values = db.Column(db.String(256), unique=True)

  def __init__(self, country, values):
    self.country = country
    self.values = values

  def __rep__(self):
    return '<Country %r>' % self.country

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/natindex')
def natindex():
  nat_index_array = Natindex.query.all()
  values_array = []
  for nat in nat_index_array:
    country_info = {}
    country = nat_index.country  
    values = nat_index.values.split(':')
    country_info['continent'] = value[0]
    country_info['Poverty Alleviation'] = value[1]
    country_info['Economic Equality'] = value[2]
    country_info['Infrastructure Index'] = value[3]
    country_info['Human Rights Index'] = value[4]
    country_info['Government Legitmacy'] = value[5]
    country_info['Literacy Rate'] = value[6]
    values_array.push({country:country_info})
  return jsonify(values_array)

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

