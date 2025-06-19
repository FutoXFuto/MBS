//納品書明細
module.exports = (sequelize, DataTypes) => {
  const DeliveryDetail = sequelize.define('DeliveryDetail', {
    delivery_detail_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    delivery_id: DataTypes.STRING,
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
    tableName: 'delivery_details',
    timestamps: false
  });
  return DeliveryDetail;
};
