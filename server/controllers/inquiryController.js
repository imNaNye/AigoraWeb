const nodemailer = require('nodemailer');

const sendInquiryEmail = async (data) => {
  const {
    client_name,
    organization,
    job_grade,
    email,
    contact,
    usage,
    inquiry_message,
    opt_in,
  } = data;

  if (!client_name || !email) {
    console.error('client_name 또는 email 누락:', { client_name, email });
    throw new Error('필수 항목이 누락되었습니다.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // ex: aigora official mail
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Aigora Web Inquiry" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER, // 대표님 메일 주소
    subject: `[AIGORA 문의] ${client_name}님으로부터 문의가 도착했습니다.`,
    html: `
      <h3>문의 정보</h3>
      <ul>
        <li><strong>성함:</strong> ${client_name}</li>
        <li><strong>소속:</strong> ${organization}</li>
        <li><strong>직급/직책:</strong> ${job_grade}</li>
        <li><strong>이메일:</strong> ${email}</li>
        <li><strong>연락처:</strong> ${contact}</li>
        <li><strong>사용 유형:</strong> ${usage}</li>
        <li><strong>문의 내용:</strong><br/>${inquiry_message}</li>
        <li><strong>광고 수신 동의:</strong> ${opt_in ? '동의함' : '동의 안함'}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('메일 전송 실패:', error);
    throw error;
  }
};

module.exports = sendInquiryEmail;