from flask_restful import Resource
import json

class FastResponse(Resource):
  def get(self):
    data = {'response': 'hola'}
    return json.dumps(data)