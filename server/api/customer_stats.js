const express = require('express');
const router = express.Router();
const db = require('../models'); // Sequelizeインスタンスとモデル群

// 顧客統計一覧取得
router.get('/', async (req, res) => {
    try {
      const stats = await db.CustomerStats.findAll();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: '顧客統計情報の取得に失敗しました。' });
    }
  });
  
  // 顧客統計1件取得
  router.get('/:id', async (req, res) => {
    try {
      const stat = await db.CustomerStats.findByPk(req.params.id);
      if (!stat) {
        return res.status(404).json({ error: '該当する顧客統計情報が見つかりません。' });
      }
      res.json(stat);
    } catch (error) {
      res.status(500).json({ error: '顧客統計情報の取得に失敗しました。' });
    }
  });

module.exports = router;