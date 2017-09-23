import express from 'express';
import path from 'path';

var slowResponseRouter = express.Router();

slowResponseRouter.route('/')
  .get((request, response) => {
    response.sendFile('daenerys.jpg', {root: path.join(__dirname, '../static')});
  })

module.exports = slowResponseRouter;
