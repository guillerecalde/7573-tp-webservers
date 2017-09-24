from flask import Flask
from flask_restful import Api
import json
import os

from resources.ShortResponse import ShortResponse
from resources.FastResponse import FastResponse
from resources.SlowResponse import SlowResponse
from resources.StaticResponse import StaticResponse
from resources.HighProcessingResponse import HighProcessingResponse

app = Flask(__name__)
api = Api(app)

api.add_resource(ShortResponse, '/api/short')
api.add_resource(FastResponse, '/api/fast')
api.add_resource(SlowResponse, '/api/slow')
api.add_resource(StaticResponse, '/api/static')
api.add_resource(HighProcessingResponse, '/api/high-processing')

if __name__ == "__main__":
  port = int(os.environ.get("PORT", 7573))
  app.run(host='0.0.0.0', port=port)
