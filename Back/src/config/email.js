import dotenv from "dotenv"
dotenv.config();
import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
    service: "Naver",
    host: "smtp.naver.com",
    port: 587,
    auth: {
        user: process.env.NAVER_EMAIL,
        pass: process.env.NAVER_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default smtpTransport;