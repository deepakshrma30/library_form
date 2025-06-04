import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

export async function generateInvoicePdf(html: string) {
  //   const executablePath = true
  //     ? await chromium.executablePath()
  //     : "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const browser = await puppeteer.launch({
    args: chromium.args,
    // args: puppeteer.defaultArgs(),
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "20px", bottom: "20px", left: "20px", right: "20px" },
  });

  await browser.close();

  return pdfBuffer;
}
