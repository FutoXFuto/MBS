//納品書明細
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('delivery_details', {
      delivery_detail_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      delivery_id: { type: Sequelize.STRING },
      product_name: { type: Sequelize.STRING },
      unit_price: { type: Sequelize.INTEGER },
      quantity: { type: Sequelize.INTEGER },
      subtotal: { type: Sequelize.INTEGER },
      is_deleted: {type: Sequelize.BOOLEAN,defaultValue: false}
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('delivery_details');
  }
};

