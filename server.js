const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history({
  logger: console.log.bind(console),
  verbose: true,
}));

app.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8002;

app.listen(port, () => {
  console.log(`listening on ${port}`);
}).on('error', (err) => {
  console.log(err);
});
