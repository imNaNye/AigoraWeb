const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/', async (req, res) => {
  const {
    client_name,
    email,
    organization,
    job_grade,
    request_type,
    opt_in,
  } = req.body;

  try {
    const sql = `
      INSERT INTO profile_request 
      (client_name, email, organization, job_grade, request_type, opt_in) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [client_name, email, organization, job_grade, request_type, opt_in ? 1 : 0];
    await pool.execute(sql, values);
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Error" });
  }
});

module.exports = router;