module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return User;
};