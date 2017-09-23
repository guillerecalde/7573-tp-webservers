import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import fastResponse from './api_router/FastResponseRouter';
import shortResponse from './api_router/ShortResponseRouter';
import slowResponse from './api_router/SlowResponseRouter';
import staticResponse from './api_router/StaticResponseRouter';
import highProcessingResponse from './api_router/HighProcessingResponseRouter';

// Init App.
const app = express();

// Configure app to use bodyParser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port.
const port = 7573;
app.set('port', process.env.PORT || port);

// Static files directory.
app.use(express.static(path.join(__dirname, 'static')));

// API routes.
var router = express.Router();

router.use('/fast', fastResponse);
router.use('/short', shortResponse);
router.use('/slow', slowResponse);
router.use('/static', staticResponse);
router.use('/high-processing', highProcessingResponse);

app.use('/api', router);

var server = app.listen(app.get('port'), () => {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});