/*
  NewsController: contains the response that will be returned.
  NewsInstance:   instance of NewsController
  express:        require express to access Router
*/
const NewsController = require('../controllers/news'),
      NewsInstance = new NewsController(),
      express = require('express'),
      router = express.Router();

// Catch root path
router.get('/', (_req, res) => {
  res.send('Root page')
});

// Catch /news path and executes method all of NewsController
router.get('/news', NewsInstance.all);

// Returns router
module.exports = router;