const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  numTestsKeptInMemory: 0,  
  watchForFileChanges: false,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  viewportHeight: 1200,
  viewportWidth: 1920,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: "Sauce Labs Demo Automation Report",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {                
    },
    video: true,       
    specPattern: 'cypress/e2e/tests/**/*.js',
    baseUrl: "https://accounts.saucelabs.com/am/XUI/#login/"
  },    
});