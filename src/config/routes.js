const NewsController = require('../controllers/news'),
      NewsInstance = new NewsController(),
      express = require('express'),
      router = express.Router();

router.get('/', (_req, res) => {
  res.send('Root page')
});

router.get('/news', NewsInstance.all);

module.exports = router;