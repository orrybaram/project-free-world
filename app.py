import os
from flask import Flask, render_template, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
import sys
import json

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
    country = nat.country  
    values = nat.values.split(':')
    country_info['continent'] = values[0]
    country_info['Poverty Alleviation'] = values[1]
    country_info['Economic Equality'] = values[2]
    country_info['Infrastructure Index'] = values[3]
    country_info['Human Rights Index'] = values[4]
    country_info['Government Legitmacy'] = values[5]
    country_info['Literacy Rate'] = values[6]
    values_array.append({country:country_info}) 
  return Response(json.dumps(values_array), mimetype='application/json')

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

