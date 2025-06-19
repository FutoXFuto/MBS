const express = require('express');
const router = express.Router();
const db = require('../models'); // Sequelizeインスタンスとモデル群

// 納品詳細一覧取得（論理削除を除外）
router.get('/', async (req, res) => {
    try {
      const details = await db.DeliveryDetail.findAll({ where: { is_deleted: false } });
      res.json(details);
    } catch (error) {
      res.status(500).json({ error: '納品詳細の取得に失敗しました。' });
    }
  });
  
  // 納品詳細1件取得
  router.get('/:id', async (req, res) => {
    try {
      const detail = await db.DeliveryDetail.findByPk(req.params.id);
      if (!detail || detail.is_deleted) {
        return res.status(404).json({ error: '該当する納品詳細が見つかりません。' });
      }
      res.json(detail);
    } catch (error) {
      res.status(500).json({ error: '納品詳細の取得に失敗しました。' });
    }
  });
  
  // 納品詳細の作成
  router.post('/', async (req, res) => {
    try {
      const newDetail = await db.DeliveryDetail.create(req.body);
      res.status(201).json(newDetail);
    } catch (error) {
      res.status(400).json({ error: '納品詳細の作成に失敗しました。' });
    }
  });
  
  // 納品詳細の更新
  router.put('/:id', async (req, res) => {
    try {
      const detail = await db.DeliveryDetail.findByPk(req.params.id);
      if (!detail || detail.is_deleted) {
        return res.status(404).json({ error: '該当する納品詳細が見つかりません。' });
      }
      await detail.update(req.body);
      res.json(detail);
    } catch (error) {
      res.status(400).json({ error: '納品詳細の更新に失敗しました。' });
    }
  });
  
  // 納品詳細の論理削除
  router.put('/:id/delete', async (req, res) => {
    try {
      const detail = await db.DeliveryDetail.findByPk(req.params.id);
      if (!detail || detail.is_deleted) {
        return res.status(404).json({ error: '該当する納品詳細が見つかりません。' });
      }
      await detail.update({ is_deleted: true });
      res.json({ message: '納品詳細を論理削除しました。' });
    } catch (error) {
      res.status(500).json({ error: '納品詳細の論理削除に失敗しました。' });
    }
  });

module.exports = router;