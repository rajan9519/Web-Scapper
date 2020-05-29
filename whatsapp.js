const puppeteer = require("puppeteer");

const scrap = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: `C:/Program Files (x86)/Google/Chrome/Application/chrome.exe`,
    args: ["--user-data-dir=./Google/Chrome/User Data/"],
  });
  const page = await browser.newPage();
  await page.goto("https://web.whatsapp.com/");
  await page.waitForSelector("._2S1VP", {
    visible: true,
  });
  var name = "Didi";
  await page.type("._2S1VP", name);
  await page.keyboard.press("Enter");
  await page.evaluate(() => {
    document.querySelectorAll("._2S1VP")[1].setAttribute("class", "msg");
  });

  for (let i = 0; i < 10; i++) {
    await page.type(".msg", "This is test message , typing typing", {
      delay: 100,
    });
    await page.keyboard.press("Enter");
  }
  return "success";
};
scrap().then((value) => {
  console.log(value);
});
