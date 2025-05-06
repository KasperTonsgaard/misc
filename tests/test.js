require('chromedriver');
const fs = require('fs');
var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

console.log(require('chromedriver').path);

const configPath = 'config.json';
if (!fs.existsSync(configPath)) {
  console.error('Config file not found:', configPath);
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const options = new chrome.Options();
options.setChromeBinaryPath(config.chrome_path);
options.addArguments(config.chrome_args.split(";"))

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

/*
// start the server
const { exec } = require('child_process');
const server = exec('npm run server', { cwd: '../' });


async function runTest() {
  try {
    // 1. Go to homepage
    await driver.get('http://localhost:3000');
    console.log('Opened homepage');

    // 2. Click on Contact link
    const contactLink = await driver.findElement(By.linkText('Contact'));
    await contactLink.click();
    await driver.wait(until.urlContains('/contact'), 2000);
    console.log('Navigated to Contact page');

    // 3. Fill out the contact form
    await driver.findElement(By.name('name')).sendKeys('Test User');
    await driver.findElement(By.name('message')).sendKeys('This is a test message.');
    await driver.findElement(By.css('form button[type="submit"]')).click();
    console.log('Form submitted');

    // 4. Verify response page content
    await driver.wait(until.elementLocated(By.css('h1')), 3000);
    const responseHeader = await driver.findElement(By.css('h1')).getText();

    if (responseHeader.includes('Thanks, Test User')) {
      console.log('✅ Test passed: Submission response is correct.');
    } else {
      console.error('❌ Test failed: Unexpected response header.');
    }

  } catch (err) {
    console.error('❌ Test failed:', err);
  } finally {
    await driver.quit();
  }
}

runTest();
*/