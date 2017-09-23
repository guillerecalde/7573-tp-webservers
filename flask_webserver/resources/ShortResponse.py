from flask_restful import Resource
import json

class ShortResponse(Resource):
  def get(self):
    data = {'response': ''}
    return json.dumps(data)