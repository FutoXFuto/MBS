const { Sequelize, DataTypes } = require('sequelize');

// ▼▼▼【差し替えが必要】PostgreSQLの接続情報を記述 ▼▼▼a
const sequelize = new Sequelize('your_db_name', 'your_username', 'your_password', {
  host: 'localhost',             // ← 必要に応じてDBサーバーのホスト名に変更
  dialect: 'postgres',
  logging: false                 // ← ログを有効にしたければ true に
});
// ▲▲▲ここまで差し替えが必要▲▲▲

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ▼ モデルの読み込み
db.Customer = require('./customer')(sequelize, DataTypes);
db.Order = require('./order')(sequelize, DataTypes);
db.OrderDetail = require('./order_detail')(sequelize, DataTypes);
db.Delivary = require('./delivary')(sequelize, DataTypes);
db.DelivaryDetail = require('./delivary_detail')(sequelize, DataTypes);
db.CustomerStats = require('./customer_stats')(sequelize, DataTypes);
db.MonthlySalesStats = require('./monthly_sales_stats')(sequelize, DataTypes);

// ▼ モデル間のリレーション定義

// 顧客と注文：1対多
db.Customer.hasMany(db.Order, { foreignKey: 'customer_id' });
db.Order.belongsTo(db.Customer, { foreignKey: 'customer_id' });

// 注文と注文明細：1対多
db.Order.hasMany(db.OrderDetail, { foreignKey: 'order_id' });
db.OrderDetail.belongsTo(db.Order, { foreignKey: 'order_id' });

// 注文と納品書：1対多
db.Order.hasMany(db.Delivary, { foreignKey: 'order_id' });
db.Delivary.belongsTo(db.Order, { foreignKey: 'order_id' });

// 注文と納品の中間リレーション（多対多）
db.Order.belongsToMany(db.Delivery, 
  {through: db.OrderDeliveryMap,
  foreignKey: 'order_id',
  otherKey: 'delivery_id'
});

db.Delivery.belongsToMany(db.Order, {
  through: db.OrderDeliveryMap,
  foreignKey: 'delivery_id',
  otherKey: 'order_id'
});

// 顧客と顧客統計：1対1
db.Customer.hasOne(db.CustomerStats, { foreignKey: 'customer_id' });
db.CustomerStats.belongsTo(db.Customer, { foreignKey: 'customer_id' });

// 月次売上統計：他のテーブルとはリレーションなし

module.exports = db;
