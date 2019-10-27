const NewsController = require('../controllers/news');
const NewsInstance = new NewsController();
const express = require('express')
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Root page')
})

router.get('/news', NewsInstance.all)

module.exports = router