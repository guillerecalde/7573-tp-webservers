import express from 'express';

var slowResponseRouter = express.Router();

slowResponseRouter.route('/')
  .get((request, response) => {
    setTimeout(() => {
      let data = {'response': 'This is a response with delay.'};
      response.json(data);
    }, 5000);
  })

module.exports = slowResponseRouter;
