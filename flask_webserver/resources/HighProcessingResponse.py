from flask_restful import Resource
import json

class HighProcessingResponse(Resource):
  def get(self):
    fibonacci = 1;
    for number in range(1, 10000):
      fibonacci += number;

    data = {'response': fibonacci}
    return json.dumps(data)