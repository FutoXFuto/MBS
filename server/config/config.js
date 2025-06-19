//PostgreSQL接続情報をまとめる設定フォルダ←って何なん？ああ
require('dotenv').config();//.envの内容を読み込んでくるようにしてる

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }//.envからDB接続情報を引っ張ってくる
};
