const { Command } = require('commander');
const inquirer = require('inquirer');
const { startLogger } = require('./logger');
const { printBanner } = require('./banner');

async function runCLI() {
  const program = new Command();

  program
    .name("api-logger")
    .description("Universal Playwright API response logger")
    .option("-u, --url <url>", "Target site URL")
    .option("-f, --filter <regex>", "API filter regex", "api")
    .option("-H, --headless", "Run in headless mode", false)
    .option("-t, --timeout <ms>", "Auto-exit after timeout (ms)", "0")
    .option("-o, --output <dir>", "Output directory", "out");

  program.parse(process.argv);
  let options = program.opts();

  // اگر هیچ URL نداد → برو حالت interactive
  if (!options.url) {
    printBanner();
    const answers = await inquirer.prompt([
      { type: 'input', name: 'url', message: 'Enter target site URL:' },
      { type: 'input', name: 'filter', message: 'Enter API filter regex (default: api):', default: 'api' },
      { type: 'confirm', name: 'headless', message: 'Run in headless mode?', default: false },
      { type: 'input', name: 'timeout', message: 'Timeout in ms (0 = no timeout):', default: '0' },
    ]);
    options = { ...options, ...answers };
  }

  printBanner(options.url, options.filter);
  await startLogger(options);
}

module.exports = { runCLI };
