import WordButtonComponent from "./WordButton";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import themes from "../../themes";

export default {
  title: "Giraffe Tools/Atoms/Word Button",
  component: WordButtonComponent,
} as Meta<typeof WordButtonComponent>;

type Story = StoryObj<typeof WordButtonComponent>;

export const WordButton: Story = {
  render: () => {
    return (
      <>
        <ThemeProvider theme={themes.lightTheme}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              padding: "10px",
              backgroundColor: "lightgray",
            }}
          >
            <WordButtonComponent
              word="word"
              mode="unselected"
              modes={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="met"
              modes={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="unmet"
              modes={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={themes.darkTheme}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              padding: "10px",
              backgroundColor: "lightgray",
            }}
          >
            <WordButtonComponent
              word="word"
              mode="unselected"
              modes={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="met"
              modes={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
            <WordButtonComponent
              word="word"
              mode="unmet"
              modes={["unselected", "met", "unmet"]}
              setButtonStatus={null}
            />
          </Box>
        </ThemeProvider>
      </>
    );
  },
};
