// server/api/api.js
const express = require('express');
const router = express.Router();

// 各APIのルーターを読み込む
const customers = require('./customers');
const orders = require('./orders');
const deliveries = require('./deliveries');
const customerStats = require('./customer_stats');
const deliveryDetails = require('./delivery_details');
const monthlySalesStats = require('./monthly_sales_stats');
const orderDetails = require('./order_details');
const customerLeadtime = require('./customer_leadtime');

// ルートにマウントする(さっき読み込んだルーターに呼び出すときのURLを割り当て)
router.use('/customers', customers);
router.use('/orders', orders);
router.use('/deliveries', deliveries);
router.use('/customer-stats', customerStats);
router.use('/delivery-details', deliveryDetails);
router.use('/monthly-sales-stats', monthlySalesStats);
router.use('/order-details', orderDetails);
router.use('/customer-leadtime', customerLeadtime);

module.exports = router;


