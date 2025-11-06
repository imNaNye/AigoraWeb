const express = require('express');
const router = express.Router();

// 예시 POST 라우트
router.post('/', async (req, res) => {
  res.status(200).json({ message: 'inquiry OK' });
});

module.exports = router;