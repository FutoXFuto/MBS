const express = require('express');
const router = express.Router();
const db = require('../models'); // Sequelizeインスタンスとモデル群

// 納品一覧を取得 (GET /api/deliveries) ←--論理削除対応使用に変更
router.get('/', async (req, res) => {
  try {
    const deliveries = await db.Delivery.findAll({
      //希望しか感じないwhere文
      where: {
        is_deleted: false // 論理削除されていない納品のみ取得
      }
    });
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ error: '納品一覧の取得に失敗しました。' });
  }
});

// 納品を1件取得（GET /api/deliveries/:id）
router.get('/:id', async (req, res) => {
  try {
    const deliveries = await db.Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: '該当する納品が見つかりません。' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: '納品の取得に失敗しました。' });
  }
});

// 納品を新規作成（POST /api/deliveries）
router.post('/', async (req, res) => {
  try {
    const newOrder = await db.Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: '納品の作成に失敗しました。' });
  }
});

// 納品を更新（PUT /api/orders/:id）
router.put('/:id', async (req, res) => {
  try {
    const order = await db.Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: '該当する納品が見つかりません。' });

    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: '納品の更新に失敗しました。' });
  }
});

// 納品を論理削除 (PUT /api/orders/:id/delete) ←--論理削除対応使用に変更
router.put('/:id/delete', async (req, res) => {
  try {
    const order = await db.Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: '該当する注文が見つかりません。' });
    }
    await order.update({ is_deleted: true });
    res.json({ message: '注文を論理削除しました。' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '注文の論理削除に失敗しました。' });
  }
});

module.exports = router;
