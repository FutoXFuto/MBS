// 顧客別の注文統計情報を算出（注文数、合計数量、合計金額、最終注文日）

const db = require('../models');

module.exports = {
  async calculateStatsByCustomer(customerId) {
    try {
      const orders = await db.Order.findAll({
        where: {
          customer_id: customerId,
          is_deleted: false
        },
        include: [db.OrderDetail]
      });

      if (!orders.length) {
        return {
          customer_id: customerId,
          order_count: 0,
          total_quantity: 0,
          total_amount: 0,
          last_order_date: null
        };
      }

      const order_count = orders.length;

      const last_order_date = orders
        .map(o => o.order_date)
        .sort((a, b) => new Date(b) - new Date(a))[0];

      let total_quantity = 0;
      let total_amount = 0;

      orders.forEach(order => {
        order.OrderDetails.forEach(detail => {
          total_quantity += detail.quantity;
          total_amount += detail.subtotal;
        });
      });

      return {
        customer_id: customerId,
        order_count,
        total_quantity,
        total_amount,
        last_order_date
      };
    } catch (error) {
      console.error('[calculateStatsByCustomer] 統計算出エラー:', error);
      throw error;
    }
  }
};
