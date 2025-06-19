//顧客情報
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      customer_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
      customer_name: { type: Sequelize.STRING, allowNull: false },
      shop_name: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      phone_number: { type: Sequelize.STRING },
      registration_date: { type: Sequelize.DATE },
      remarks: { type: Sequelize.STRING }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};


