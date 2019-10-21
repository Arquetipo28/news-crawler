const Crawler = require('../models/Crawler').Crawler;
const principalCrawler = new Crawler()

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Root page')
  })

  app.get('/linkedin/posts', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(await principalCrawler.posts()));
  })
}