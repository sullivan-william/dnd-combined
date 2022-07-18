'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // A character can only belong to one user
      Character.belongsTo(User, {
        foreignKey: "user_id",
        as: "user"
      })
    }
  }
  Character.init({
    character_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
    tableName: 'characters',
    timestamps: false
  });
  return Character;
};