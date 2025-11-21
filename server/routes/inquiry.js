const express = require('express');
const router = express.Router();

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
    console.log("정상 insert 완료");
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Error" });
  }
});

module.exports = router;