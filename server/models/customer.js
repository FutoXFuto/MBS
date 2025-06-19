//顧客情報
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customer_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shop_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    registration_date: DataTypes.DATE,
    remarks: DataTypes.STRING
  }, {
    tableName: 'customers',
    timestamps: false
  });
  return Customer;
};
