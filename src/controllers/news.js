const Crawler = require('../models/Crawler').Crawler;
const principalCrawler = new Crawler()

class NewsController {
  async all (_req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(await principalCrawler.posts()));
  }
}

module.exports = NewsController