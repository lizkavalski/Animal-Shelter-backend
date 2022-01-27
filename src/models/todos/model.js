const todoModel = (sequelize, DataTypes) => sequelize.define('Todo', {
  todos: { type: DataTypes.STRING, required: true },
  assignee: { type: DataTypes.STRING, required: true },
  difficulty: { type: DataTypes.INTEGER, required: true },
  completed:{type:DataTypes.BOOLEAN},
});

module.exports = todoModel;