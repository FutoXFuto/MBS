// server/app.js
const express = require('express');
const app = express();
const apiRouter = require('./api/api'); // ルーティングまとめファイル

app.use(express.json()); // JSONパース中間処理
app.use('/api', apiRouter); // 「/api」以下にAPIルートを集約

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});