const express = require('express');
const router = express.Router();
const { Customer } = require('../models'); // SequelizeのCustomerモデルをインポート

// 顧客一覧取得（GET /api/customers)
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error('顧客一覧取得エラー:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 顧客登録（POST /api/customers）
router.post('/', async (req, res) => {
  try {
    const { customer_id, customer_name, address, phone_number, registration_date, remarks } = req.body;
    const newCustomer = await Customer.create({
      customer_id,
      customer_name,
      address,
      phone_number,
      registration_date,
      remarks
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('顧客登録エラー:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
