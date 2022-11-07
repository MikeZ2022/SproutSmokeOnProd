const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dcws3b",

  e2e: {
    baseUrl:'https://app-qa.getsprout.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
