'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users/model.js');
const AnimalModel = require('./animals/model.js');
const todoModel = require('./todos/model')

const Collection = require('./dataCollection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

const users = userModel(sequelize, DataTypes);
const animal = AnimalModel(sequelize, DataTypes);
const todo = todoModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: new Collection(users),
  animals: new Collection(animal),
  todos: new Collection(todo)
};