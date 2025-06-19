const express = require('express');
const router = express.Router();
const { calculateLeadTimeByCustomer } = require('../business/calculateCustomerAverageLeadTime');

router.get('/:id', async (req, res) => {
  try {
    const result = await calculateLeadTimeByCustomer(req.params.id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'リードタイム算出に失敗しました。' });
  }
});

module.exports = router;
