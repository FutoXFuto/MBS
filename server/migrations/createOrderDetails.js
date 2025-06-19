//注文書明細
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_details', {
      order_detail_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      order_id: { type: Sequelize.STRING },
      product_name: { type: Sequelize.STRING },
      unit_price: { type: Sequelize.INTEGER },
      quantity: { type: Sequelize.INTEGER },
      subtotal: { type: Sequelize.INTEGER },
      is_deleted: {type: Sequelize.BOOLEAN,defaultValue: false}
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_details');
  }
};

