const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { sendBrochureEmail } = require("../controllers/brochureController"); 

router.post('/', async (req, res) => {
  const {
    client_name,
    email,
    organization,
    job_grade,
    opt_in,
  } = req.body;

  // 필수 값 누락 검사
  if (!client_name || !email || !organization) {
    return res.status(400).json({ error: "필수 항목 누락" });
  }

  try {
    const sql = `
      INSERT INTO profile_request 
      (client_name, email, organization, job_grade, opt_in) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      client_name ?? null,
      email ?? null,
      organization ?? null,
      job_grade ?? null,
      opt_in ? 1 : 0
    ];
    await pool.execute(sql, values);
    try {
      await sendBrochureEmail({
        client_name,
        email,
        organization,
        job_grade,
        opt_in
      });
    } catch (emailErr) {
      console.error("메일 전송 실패:", emailErr);
      // 이메일 전송 실패 시에도 DB에는 이미 저장되었으므로 에러를 반환하지 않음
    }
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Error" });
  }
});

module.exports = router;