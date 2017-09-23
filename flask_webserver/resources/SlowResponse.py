from flask_restful import Resource
import json
import time

class SlowResponse(Resource):
  def get(self):
    time.sleep(5)
    data = {'response': 'This is a response with a delay of 5 sec.'}
    return json.dumps(data)