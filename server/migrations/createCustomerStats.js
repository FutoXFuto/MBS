//統計情報
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_stats', {
      customer_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      start_date: { type: Sequelize.DATE },
      end_date: { type: Sequelize.DATE },
      order_count: { type: Sequelize.INTEGER },
      total_quantity: { type: Sequelize.INTEGER },
      total_amount: { type: Sequelize.INTEGER },
      last_order_date: { type: Sequelize.DATE },
      average_lead_time: { type: Sequelize.FLOAT }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer_stats');
  }
};

