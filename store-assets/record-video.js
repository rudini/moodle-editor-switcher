const { chromium } = require('playwright');
const path = require('path');

async function recordDemo() {
  const extensionPath = path.resolve(__dirname, '..');

  console.log('='.repeat(60));
  console.log('MOODLE EDITOR SWITCHER - VIDEO RECORDING HELPER');
  console.log('='.repeat(60));
  console.log('\nThis script will help you record a demo video.\n');
  console.log('INSTRUCTIONS:');
  console.log('1. Start your screen recording software (OBS, QuickTime, etc.)');
  console.log('2. Press ENTER to launch the browser');
  console.log('3. Log in to Moodle when prompted');
  console.log('4. Follow the on-screen prompts to demonstrate the extension');
  console.log('5. Stop your screen recording when done\n');
  console.log('Press ENTER to start...');

  await waitForEnter();

  console.log('\nLaunching browser with extension...');

  const context = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
    ],
    viewport: { width: 1280, height: 720 }
  });

  const page = await context.newPage();

  // Navigate to Moodle
  console.log('\n📍 Navigating to Moodle...');
  await page.goto('https://moodle.hftm.ch');

  console.log('\n' + '='.repeat(60));
  console.log('STEP 1: LOG IN TO MOODLE');
  console.log('='.repeat(60));
  console.log('Please log in to Moodle, then press ENTER...');
  await waitForEnter();

  // Navigate to a course editing page
  console.log('\n📍 Navigating to course editing page...');
  await page.goto('https://moodle.hftm.ch/course/modedit.php?update=462929&return=1');
  await page.waitForTimeout(2000);

  console.log('\n' + '='.repeat(60));
  console.log('STEP 2: DEMONSTRATE THE EXTENSION');
  console.log('='.repeat(60));
  console.log('\nNow demonstrate the extension:');
  console.log('1. Click the extension icon in the toolbar (orange icon)');
  console.log('2. Show the popup opening');
  console.log('3. Click on different editors (TinyMCE, Atto, Plain Text)');
  console.log('4. Show the success message');
  console.log('5. Optionally refresh the page to show the editor changed');
  console.log('\nPress ENTER when done demonstrating...');
  await waitForEnter();

  console.log('\n' + '='.repeat(60));
  console.log('RECORDING COMPLETE');
  console.log('='.repeat(60));
  console.log('\nYou can now stop your screen recording.');
  console.log('Press ENTER to close the browser...');
  await waitForEnter();

  await context.close();
  console.log('\nDone! Your video is ready for editing and upload.');
}

function waitForEnter() {
  return new Promise(resolve => {
    process.stdin.once('data', resolve);
  });
}

recordDemo().catch(console.error);
