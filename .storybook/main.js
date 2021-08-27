module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    // "@storybook/preset-typescript",
    "@storybook/addon-essentials",
    "storybook-addon-gatsby",
  ],
  core: {
    builder: "webpack5",
  },
}
