import WordToolComponent from "@/components/WordTool";
import { ThemeModeContextProvider, useThemeModeContext } from "@/context";
import themes from "@/themes";
import { ThemeProvider } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Giraffe Tools/Pages/WordTool",
  component: WordToolComponent,
} as Meta<typeof WordToolComponent>;

type Story = StoryObj<typeof WordToolComponent>;

export const WordTool: Story = {
  parameters: { backgrounds: { default: "dark" } },
  decorators: [
    (Story) => {
      return (
        <ThemeModeContextProvider>
          <Story />
        </ThemeModeContextProvider>
      );
    },
  ],
  render: () => {
    const { darkMode } = useThemeModeContext();

    return (
      <ThemeProvider theme={darkMode ? themes.darkTheme : themes.lightTheme}>
        <WordToolComponent />
      </ThemeProvider>
    );
  },
};
