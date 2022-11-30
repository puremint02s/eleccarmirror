import mongoose from "mongoose";
import "dotenv/config";
// import { User } from "./model/User.js";

const DB_URL =
    process.env.MONGODB_URL ||
    "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인해 주세요.";

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected");
    })
    .catch((e) => console.log(e));

const db = mongoose.connection;

db.once("connected", () => {
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL);
});

db.on("error", (error) =>
    console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);

// export { User };
