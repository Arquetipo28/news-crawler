const puppeteer = require('puppeteer');

async function posts () {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.milenio.com/ultima-hora');
  await page.waitForSelector("[class='content']")
  let wallData = await page.evaluate(e => {
    window.scrollTo(0, 500);
    let elements = Array.from(document.querySelectorAll("[class='lr-row-news']"))
    let posts = elements.map(cont => {
      let elTitle = cont.querySelector(".title-container > .title")
      let elContent = cont.querySelector(".title-container > .summary > span")
      let elDateTime = cont.querySelector("[class='hour']")
      return {
        title: (elTitle && elTitle.innerText) ? elTitle.innerText.replace('\n', ' ') : 'Not found',
        content: (elContent && elContent.innerText) ? elContent.innerText.replace('\n', ' ') : "No content found",
        created_at: (elDateTime && elDateTime.innerText) ? elDateTime.innerText.replace('\n', ' ') : "No content found",
        provider: 'MILENIO'
      }
    })
    return posts
  })

  await page.goto('https://elpais.com/tag/mexico/a');
  await page.waitForSelector("[class='articulos articulos_cuerpo']")
  wallData = [...wallData, ...(await page.evaluate(e => {
    window.scrollTo(0, 500);
    let elements = Array.from(document.querySelectorAll("div[class='articulo__interior']"))
    let posts = elements.map(cont => {
      let elTitle = cont.querySelector(".articulo-titulo")
      let elContent = cont.querySelector(".articulo-entradilla")
      let elDateTime = cont.querySelector(".articulo-metadatos > time")
      return {
        title: (elTitle && elTitle.innerText) ? elTitle.innerText.replace('\n', ' ') : 'Not found',
        content: (elContent && elContent.innerText) ? elContent.innerText.replace('\n', ' ') : "No content found",
        created_at: (elDateTime && elDateTime.innerText) ? elDateTime.innerText.replace('\n', ' ') : "No content found",
        provider: 'EL PAÍS'
      }
    })
    return posts
  }))]

  return wallData
}

module.exports = {
  Crawler: function (app) {
    constructor()
    {
    }
    this.posts = posts
  }
}
