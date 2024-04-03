const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity:false,
    experimentalModifyObstructiveThirdPartyCode: true,

  e2e: {
    setupNodeEvents(on, config) {
    }
  }

}
);
