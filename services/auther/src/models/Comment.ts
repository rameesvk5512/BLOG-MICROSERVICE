import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import { Blog } from './Blog.js';

export const Comment = sequelize.define('Comment', {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  commenterID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'comments',
  timestamps: true,
});


Blog.hasMany(Comment, {
  foreignKey: 'blogID',
  as: 'comments',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blogID',
  as: 'blog',
});
