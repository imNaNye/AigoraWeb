const nodemailer = require("nodemailer");

const sendBrochureEmail = async (data) => {
  const { client_name, email, organization, job_grade, opt_in } = data;

  if (!client_name || !email || !organization) {
    throw new Error("필수 항목이 누락되었습니다.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEIVER,
    subject: "[AIGORA] 소개서 요청 도착",
    html: `
      <h3>신청자 정보</h3>
      <p><strong>이름:</strong> ${client_name}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>소속 기관:</strong> ${organization}</p>
      <p><strong>직급:</strong> ${job_grade}</p>
      <p><strong>홍보 이메일 수신 동의:</strong> ${opt_in ? "예" : "아니오"}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendBrochureEmail };