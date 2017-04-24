const express = require('express');
const dataModel = require('../../lib/dataModel');

const id = req => req.params.id;

// Routes
const router = express.Router();
router.get('/:id', (req, res) => {
  // let id = req.params.id;
  // let ret = {};(
  // ret[id(req)] = dataModel.model[id];
  if (dataModel.model[id(req)]) {
    res.send(dataModel.model[id(req)]);
  } else {
    res.status(400).send(`${id(req)} does not exist`);
  }
});

router.post('/:id', (req, res) => {
  // let id = req.params.id;
  if (dataModel.model[id(req)]) {
    res.status(400).send(`${id(req)} error: VALUE ALREADY EXISTS`);
  } else {
    dataModel.model[id(req)] = req.body;
    console.log(dataModel.model);
    res.json({ message: 'Huzzah it was added!' });
  }
});

router.put('/:id', (req, res) => {
  if (!dataModel.model[req.params.id]) {
    res.status(400).send(`${req.params.id} does not exist!`);
  } else {
    // let id = req.params.id;
    dataModel.model[id(req)] = req.body;
    const response = {};

    console.log(dataModel.model);
    res.send(dataModel.model[id(req)]);
  }
});

router.delete('/:id', (req, res) => {
  if (!dataModel.model[req.params.id]) {
    res.status(400).send(`${req.params.id} does not exist`);
  } else {
    delete dataModel.model[id(req)];
    res.status(400).send(`${req.params.id} has been deleted`);
  }
});

module.exports = router;

