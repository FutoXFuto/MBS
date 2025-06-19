//納品書
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deliveries', {
      delivery_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      order_id: { type: Sequelize.STRING },
      delivery_date: { type: Sequelize.DATE },
      delivery_method: { type: Sequelize.STRING },
      delivery_status: { type: Sequelize.STRING },
      delivery_address: { type: Sequelize.STRING },
      remarks: { type: Sequelize.STRING },
      is_deleted: {type: Sequelize.BOOLEAN,defaultValue: false}
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('deliveries');
  }
};

