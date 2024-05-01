import WordButtonComponent from "@/components/WordButton";
import { themes } from "@/themes";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Giraffe Tools/Atoms/Word Button",
  component: WordButtonComponent,
} as Meta<typeof WordButtonComponent>;

type Story = StoryObj<typeof WordButtonComponent>;

export const Light: Story = {
  render: () => {
    return (
      <>
        <ThemeProvider theme={themes.lightTheme}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              padding: "10px",
            }}
          >
            <WordButtonComponent
              word="word"
              mode="unselected"
              modeOptions={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="met"
              modeOptions={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="unmet"
              modeOptions={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
          </Box>
        </ThemeProvider>
      </>
    );
  },
};

export const Dark: Story = {
  parameters: { backgrounds: { default: "dark" } },
  render: () => {
    return (
      <>
        <ThemeProvider theme={themes.darkTheme}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              padding: "10px",
            }}
          >
            <WordButtonComponent
              word="word"
              mode="unselected"
              modeOptions={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="met"
              modeOptions={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="unmet"
              modeOptions={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
          </Box>
        </ThemeProvider>
      </>
    );
  },
};
