module.exports = {
  "stories": ['../src/app/components/**/*.stories.ts'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: true
  }
};