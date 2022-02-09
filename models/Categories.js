module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
};