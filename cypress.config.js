const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity:false,
    experimentalModifyObstructiveThirdPartyCode: true,

  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito')
          return launchOptions
        }
      })
    }
  }

}
);
