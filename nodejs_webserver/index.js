import express from 'express';

const app = express();

// Set port.
const port = 7573;
app.set('port', process.env.PORT || port);

// API routes.
app.get('/', (request, response) => {
  response.send('Hola mundo!');
});


var server = app.listen(app.get('port'), () => {
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});