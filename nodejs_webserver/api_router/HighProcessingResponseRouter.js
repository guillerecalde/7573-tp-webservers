import express from 'express';

var highProcessingResponseRouter = express.Router();

highProcessingResponseRouter.route('/')
  .get((request, response) => {
    var fibonacci = 1;
    for (var number = 0; number < 10000; number++) {
      fibonacci += number;
    }

    let data = {'response': fibonacci};
    response.json(data);
  })

module.exports = highProcessingResponseRouter;
