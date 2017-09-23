import express from 'express';
import bodyParser from 'body-parser';

import fastResponse from './api_router/FastResponseRouter';

// Init App.
const app = express();

// Configure app to use bodyParser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port.
const port = 7573;
app.set('port', process.env.PORT || port);

// API routes.
var router = express.Router();

router.use('/fast', fastResponse);

app.use('/api', router);

var server = app.listen(app.get('port'), () => {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});