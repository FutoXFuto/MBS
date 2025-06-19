//リードタイム算出のビジネスロジックを記述する
const db = require('../models');

module.exports = {
  async calculateAllCustomerStats(customerId) {
    const orders = await db.Order.findAll({
      where: {
        customer_id: customerId,//customerIdで指定された顧客IDに関連する注文情報をすべて取得
        is_deleted: false
      },
      include: [db.OrderDetail]//OrderDetail（注文明細）もJOINして一緒に取得。
    });

    // 基本統計
    const order_count = orders.length;//order_count：注文数
    const last_order_date = orders//最新の注文日（降順に並べて先頭）
      .map(o => o.order_date)
      .sort((a, b) => new Date(b) - new Date(a))[0];

    let total_quantity = 0;//total_quantity：購入された全商品の合計数量
    let total_amount = 0;//total_amount：小計の合計

    orders.forEach(order => {
      order.OrderDetails.forEach(detail => {
        total_quantity += detail.quantity;
        total_amount += detail.subtotal;
      });
    });

    // 平均リードタイム算出
    const mappings = await db.OrderDeliveryMap.findAll({
      include: [db.Order, db.Delivery]
    });

    const deliveryMap = {};

    for (const map of mappings) {
      if (!map.Order || !map.Delivery) continue;
      if (map.Order.customer_id !== customerId) continue;

      const deliveryId = map.delivery_id;
      const orderDate = new Date(map.Order.order_date);
      const deliveryDate = new Date(map.Delivery.delivery_date);

      if (!deliveryMap[deliveryId]) {
        deliveryMap[deliveryId] = {
          delivery_date: deliveryDate,
          earliest_order_date: orderDate
        };
      } else {
        if (orderDate < deliveryMap[deliveryId].earliest_order_date) {
          deliveryMap[deliveryId].earliest_order_date = orderDate;
        }
      }
    }

    const leadTimes = Object.values(deliveryMap).map(entry =>
      Math.ceil((entry.delivery_date - entry.earliest_order_date) / (1000 * 60 * 60 * 24))
    );

    const average_lead_time =
      leadTimes.length > 0
        ? parseFloat((leadTimes.reduce((a, b) => a + b, 0) / leadTimes.length).toFixed(2))
        : null;

    return {
      customer_id: customerId,
      order_count,
      total_quantity,
      total_amount,
      last_order_date,
      average_lead_time
    };
  }
};
