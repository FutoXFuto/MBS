'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_delivery_map', {
      map_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      order_id: Sequelize.STRING,
      delivery_id: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_delivery_map');
  }
};
