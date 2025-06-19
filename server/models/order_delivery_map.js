// 注文と納品の中間テーブル（納品と注文を紐づける役割）
module.exports = (sequelize, DataTypes) => {
  const OrderDeliveryMap = sequelize.define('OrderDeliveryMap', {
    map_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    order_id: DataTypes.STRING,
    delivery_id: DataTypes.STRING,
  }, {
    tableName: 'order_delivery_map',
    timestamps: false
  });

  return OrderDeliveryMap;
};