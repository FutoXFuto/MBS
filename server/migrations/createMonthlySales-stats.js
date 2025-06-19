//月次別統計情報
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('monthly_sales_stats', {
      monthly_stats_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      year: { type: Sequelize.INTEGER },
      month: { type: Sequelize.INTEGER },
      order_count: { type: Sequelize.INTEGER },
      total_quantity: { type: Sequelize.INTEGER },
      total_sales: { type: Sequelize.INTEGER }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('monthly_sales_stats');
  }
};

