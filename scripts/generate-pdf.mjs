import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  const htmlPath = path.resolve(__dirname, '../resume.html');
  const outputPath = path.resolve(__dirname, '../sparsh_singh_resume.pdf');

  if (!fs.existsSync(htmlPath)) {
    console.error(`Error: resume.html not found at ${htmlPath}`);
    process.exit(1);
  }

  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  console.log('Generating PDF artifact...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '15mm',
      right: '15mm'
    }
  });

  await browser.close();
  console.log(`✅ Success! Generated PDF: ${outputPath}`);
}

generatePDF().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
