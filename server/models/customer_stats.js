//統計情報
module.exports = (sequelize, DataTypes) => {
  const CustomerStats = sequelize.define('CustomerStats', {
    customer_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    order_count: DataTypes.INTEGER,
    total_quantity: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    last_order_date: DataTypes.DATE,
    average_lead_time: DataTypes.FLOAT
  }, {
    tableName: 'customer_stats',
    timestamps: false
  });
  return CustomerStats;
};
