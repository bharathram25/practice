'use strict';

// Define a model for skill table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('skill', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employeeId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'skill'
  });
  // Adding a class level method.
  Model.associate = function (models) {
    this.employeeId = this.belongsTo(models.employee);

  };
  return Model;
};