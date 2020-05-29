const puppeteer = require("puppeteer");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.type("#num1", "34");
  await page.type("#num2", "54");
  await page.keyboard.press("Enter");

  return "success";
};
scrape().then((value) => {
  console.log(value);
});
