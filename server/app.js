// Express 앱의 시작점
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const brochureRouter = require('./routes/brochure');
const inquiryRouter = require('./routes/inquiry');

app.use('/api/brochure', brochureRouter);
app.use('/api/inquiry', inquiryRouter);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});