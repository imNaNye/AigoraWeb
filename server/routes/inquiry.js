const express = require('express');
const router = express.Router();
const sendInquiryEmail = require('../controllers/inquiryController');

const pool = require('../config/db');

router.post('/', async (req, res) => {
  const {
    client_name,
    email,
    organization,
    job_grade,
    contact,
    usage,
    inquiry_message,
    opt_in
  } = req.body;

  if (!client_name || !email || !inquiry_message) {
    return res.status(400).json({ error: "필수 항목 누락" });
  }

  try {
    const sql =
      'INSERT INTO inquiry (client_name, email, organization, job_grade, contact, `usage`, inquiry_message, opt_in) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      client_name ?? null,
      email ?? null,
      organization ?? null,
      job_grade ?? null,
      contact ?? null,
      usage ?? null,
      inquiry_message ?? null,
      opt_in ? 1 : 0
    ];

    await pool.execute(sql, values);
    try {
      await sendInquiryEmail(req.body);
    } catch (emailError) {
      console.error("메일 전송 실패:", emailError);
      // 이메일 전송 실패 시에도 DB 저장은 되었으므로, 클라이언트에는 성공 응답을 보냄
    }
    console.log("정상 insert 완료");
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Error" });
  }
});

module.exports = router;