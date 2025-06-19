//注文書明細
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    order_detail_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    order_id: DataTypes.STRING,
    product_name: DataTypes.STRING,
    unit_price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER,

    //↓削除フラグ（論理削除用）
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    tableName: 'order_details',
    timestamps: false
  });
  return OrderDetail;
};
