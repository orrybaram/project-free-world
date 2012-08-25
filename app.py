import os
from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/natindex')
def natindex():
    return jsonify(Natindex.query.all())

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

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
