import db from "./schemas";

const sequelize = db.sequelize;

const connectDB = async() => {
    try {
      await sequelize.authenticate();
      console.log("✅DB 연결 완료");
  
      await sequelize.sync({alter: true, force: false});
      console.log("✅DB 동기화 완료")
  
    } catch(err) {
      console.log("⛔DB 연결 및 동기화 실패", err)
    }
  }

export default connectDB;