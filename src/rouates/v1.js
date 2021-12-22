'use strict';

const express = require('express');
const router = express.Router();
const modelsMiddleware = require('../middleware/model.js');

router.param('model', modelsMiddleware);

router.get('/', datapage);
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', handleCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);

async function datapage(req, res){
  let message = {message:'"There no place like home"- Dorothy(Wizard of Oz)'}
  res.status(200).json(message)
}


async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  let message = {message:'"“Aw, you guys made me ink.”- Pearl (Finding Nemo.)', allRecords}

  res.status(200).json(message);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  let message = {message:'"“Bbippity boppity boo.”- Fairy Godmother (Cinderella.)'}

  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;