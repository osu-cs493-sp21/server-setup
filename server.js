const express = require('express');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 8000;

const lodgings = require('./lodgings');

app.use(express.json());

app.use(logger);

app.get('/lodgings', (req, res, next) => {
  res.status(200).send(lodgings);
});

app.post('/lodgings', (req, res) => {
  console.log("== req.body:", req.body);
  if (req.body && req.body.name && req.body.description) {
    lodgings.push({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    });
    const id = lodgings.length - 1;
    res.status(201).send({
      id: id
    });
  } else {
    res.status(400).send({
      err: "Request body needs 'name' and 'description' fields."
    });
  }
});

app.get('/lodgings/:id', (req, res, next) => {
  console.log("== req.params:", req.params);
  const id = req.params.id;
  if (lodgings[id]) {
    res.status(200).send(lodgings[id]);
  } else {
    next();
  }
});

// app.put();
// app.patch();
// app.delete();

app.use('*', (req, res, next) => {
  res.status(404).send({
    err: "The requested resource doesn't exist: " + req.originalUrl
  });
});

app.listen(port, () => {
  console.log("== Server is listening on port", port);
});
