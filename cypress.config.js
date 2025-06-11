const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'./cypress/qualifiedcrew/firsproject/*.js'
  },
   
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'C:/Users/lenovo/OneDrive/Desktop/New folder (2)/report',
    overwrite: true,
    html: true,
    json: true
  }
});
