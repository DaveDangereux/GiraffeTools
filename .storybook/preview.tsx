import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [{ name: "dark", value: "#000000" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Giraffe Tools", ["Pages", "Organisms", "Molecules", "Atoms"]],
      },
    },
  },
};

export default preview;
