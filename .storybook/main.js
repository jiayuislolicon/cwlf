module.exports = {
  //👇 Location of our stories
  stories: [
    "../src/components/**/*.stories.js",
    "../src/layouts/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-notes/register",
    "@storybook/preset-create-react-app",
  ],
};
