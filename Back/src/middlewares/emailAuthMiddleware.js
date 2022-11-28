import smtpTransport from "../config/email";

const generateRandomNumber = (min, max) => {
  const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
};

const SendEmail = async (req, res, next) => {
  const number = generateRandomNumber(11111, 99999);
  const email = req.body.email;

  const mailOptions = {
    from: process.env.NAVER_EMAIL,
    to: email,
    subject: "[My Elec Car]인증번호 이메일입니다.",
    text: "오른쪽 숫자 6자리를 입력해주세요 : " + number,
  };

  await smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      next(error);
    } else {
      req.body.result = { message: "이메일 전송 완료", number };
      next();
    }
  });
};

export default SendEmail;
