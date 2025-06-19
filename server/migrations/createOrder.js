//注文書
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      order_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      customer_id: { type: Sequelize.STRING },
      order_date: { type: Sequelize.DATE },
      delivery_due_date: { type: Sequelize.DATE },
      delivery_address: { type: Sequelize.STRING },
      payment_method: { type: Sequelize.STRING },
      payment_status: { type: Sequelize.STRING },
      delivery_status: { type: Sequelize.STRING },
      remarks: { type: Sequelize.STRING },
      is_deleted: {type: Sequelize.BOOLEAN,defaultValue: false}

      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};

