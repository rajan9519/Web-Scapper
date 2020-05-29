const puppeteer = require("puppeteer");
let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
  );
  const result = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let price = document.querySelector(".price_color").innerText;
    return { title, price };
  });
  browser.close();
  return result;
};
scrape().then((value) => {
  console.log(value);
});
