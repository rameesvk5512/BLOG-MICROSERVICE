import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from './index.js';


export const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  blogContent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },

  author: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'blogs',
  timestamps: true,
});

