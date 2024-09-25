const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "requestTimeout":10000,
    "env":{
      "baseUrl": "https://magento.softwaretestingboard.com/",
      "user":"",
      "password":""
    }
  },
});
