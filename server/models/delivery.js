//納品書
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    delivery_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    order_id: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    delivery_method: DataTypes.STRING,
    delivery_status: DataTypes.STRING,
    delivery_address: DataTypes.STRING,
    remarks: DataTypes.STRING,

    //↓削除フラグ（論理削除用）
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    tableName: 'deliveries',
    timestamps: false
  });
  return Delivery;
};
