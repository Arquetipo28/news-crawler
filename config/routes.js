const NewsController = require('../controllers/news');
const NewsInstance = new NewsController();

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Root page')
  })

  app.get('/news', NewsInstance.all)
}