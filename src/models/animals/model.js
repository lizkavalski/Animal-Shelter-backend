const AnimalModel = (sequelize, DataTypes) => sequelize.define('animal', {
  name: { type: DataTypes.STRING, required: true },
  age: { type: DataTypes.INTEGER, required: true },
  animal: { type: DataTypes.ENUM('Cat', 'Dog', 'Magical Creatures'), required: true },
  breed:{type: DataTypes.STRING,require:true},
  color:{type: DataTypes.STRING,require:true},
  gender:{type: DataTypes.ENUM('Male','Female', 'Unknown'), required: true},
  health:{ type: DataTypes.ENUM('Healthy', 'Madical Issuse(s)', 'Terminal ill'), required: true},
  cost:{type: DataTypes.STRING,require:true},
  about:{type: DataTypes.STRING,require:true},
});

module.exports = AnimalModel;