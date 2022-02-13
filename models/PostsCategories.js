module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('PostCategorie', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: DataTypes.INTEGER,
  
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });

  return User;
};