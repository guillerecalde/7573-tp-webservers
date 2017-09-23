import express from 'express';

var shortResponseRouter = express.Router();

shortResponseRouter.route('/')
  .get((request, response) => {
    let data = {'response': 'This is a short response.'};
    response.json(data);
  })

module.exports = shortResponseRouter;
