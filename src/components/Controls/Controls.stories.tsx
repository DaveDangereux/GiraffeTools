import ControlsComponent from "@/components/Controls";
import { ThemeModeContextProvider } from "@/context";
import { themes } from "@/themes";
import { ThemeProvider } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Giraffe Tools/Molecules/Controls",
  component: ControlsComponent,
} as Meta<typeof ControlsComponent>;

type Story = StoryObj<typeof ControlsComponent>;

export const Light: Story = {
  render: () => (
    <ThemeModeContextProvider>
      <ThemeProvider theme={themes.lightTheme}>
        <ControlsComponent
          view="all"
          cycleView={() => {
            return;
          }}
          resetButtons={() => {
            return;
          }}
        />
      </ThemeProvider>
    </ThemeModeContextProvider>
  ),
};

export const Dark: Story = {
  parameters: { backgrounds: { default: "dark" } },
  render: () => (
    <ThemeModeContextProvider>
      <ThemeProvider theme={themes.darkTheme}>
        <ControlsComponent
          view="all"
          cycleView={() => {
            return;
          }}
          resetButtons={() => {
            return;
          }}
        />
      </ThemeProvider>
    </ThemeModeContextProvider>
  ),
};
