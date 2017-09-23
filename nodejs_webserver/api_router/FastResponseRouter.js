import express from 'express';

var fastResponseRouter = express.Router();

fastResponseRouter.route('/')
  .get((request, response) => {
    let data = {'response': 'hola'};
    response.json(data);
  })

module.exports = fastResponseRouter;
