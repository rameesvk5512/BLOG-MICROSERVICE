const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Blog = sequelize.define(
  'Blog',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    blogContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
   image: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
   auther: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true