const puppeteer = require("puppeteer");
const { AthenaPage } = require("./classes/athenapage");

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  browser.on("targetcreated", async (target) => {
    const page = await target.page();
    if (page) new AthenaPage(page);
  });
}

main();
