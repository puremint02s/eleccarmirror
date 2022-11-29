const express = require("express");
const { sequelize } = require("./db/models");

const ConnectDB = async() => {
    try {
      await sequelize.authenticate();
      console.log("✅DB 연결 완료");
  
      await sequelize.sync({force: false});
      console.log("✅DB 동기화 완료")
  
    } catch(err) {
      console.log("⛔DB 연결 및 동기화 실패", err)
    }
  }

ConnectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("Hello!");
});


module.exports = app;