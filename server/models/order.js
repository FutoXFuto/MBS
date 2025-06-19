//注文書
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    customer_id: DataTypes.STRING,
    order_date: DataTypes.DATE,
    delivery_due_date: DataTypes.DATE,
    delivery_address: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    payment_status: DataTypes.STRING,
    delivery_status: DataTypes.STRING,
    remarks: DataTypes.STRING,

    //↓削除フラグ（論理削除用）
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    tableName: 'orders',
    timestamps: false
  });
  return Order;
};
