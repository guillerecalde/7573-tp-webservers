from flask import send_file
from flask_restful import Resource

class StaticResponse(Resource):
  def get(self):
    filename = 'static/daenerys.jpg'
    return send_file(filename, mimetype='image/jpg')
