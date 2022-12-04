import mongoose from "mongoose";

async function mongoDBConnect(error, req, res, next) {
    // 터미널에 노란색으로 출력됨.
    if (mongoose.connection !== 1) {
        await mongoose.connect(
            //얘를 유틸로 빼기? => 이거 연결된건지 아닌지 체크해야함 혐고스...
            "mongodb+srv://elice:1234@cluster0.ywtdzxi.mongodb.net/?retryWrites=true&w=majority"
        );
    }
    next();
}

export { mongoDBConnect };
