module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: DataTypes.INTEGER,
  
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
};