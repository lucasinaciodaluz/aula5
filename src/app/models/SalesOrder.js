module.exports = (sequelize, DataTypes) => {
  const SalesOrder = sequelize.define('SalesOrder', {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    price: DataTypes.FLOAT,
  });

  SalesOrder.associate = (models) => {
    SalesOrder.belongsTo(models.User, {
      foreingKey: 'user_id',
      as: 'user',
    });
  };

  return SalesOrder;
};
