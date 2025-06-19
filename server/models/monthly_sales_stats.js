//月次別統計情報
module.exports = (sequelize, DataTypes) => {
  const MonthlySalesStats = sequelize.define('MonthlySalesStats', {
    monthly_stats_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    order_count: DataTypes.INTEGER,
    total_quantity: DataTypes.INTEGER,
    total_sales: DataTypes.INTEGER
  }, {
    tableName: 'monthly_sales_stats',
    timestamps: false
  });
  return MonthlySalesStats;
};
