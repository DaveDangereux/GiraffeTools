import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import themes from "../../themes";
import type { Mode, SetButtonStatusFunction, View } from "../../types";
import WordCardComponent from "./WordCard";

export default {
  title: "Giraffe Tools/Molecules/Word Card",
  component: WordCardComponent,
} as Meta<typeof WordCardComponent>;

interface Props {
  sectionIndex: number;
  cardIndex: number;
  wordButtonData: { word: string; mode: Mode }[];
  view: View;
  setButtonStatus: SetButtonStatusFunction | null;
}

const props: Props = {
  sectionIndex: 0,
  cardIndex: 0,
  wordButtonData: [
    { word: "word", mode: "unselected" },
    { word: "word", mode: "unselected" },
    { word: "word", mode: "unselected" },
    { word: "word", mode: "unselected" },
    { word: "word", mode: "unselected" },
  ],
  view: "all",
  setButtonStatus: null,
};

type Story = StoryObj<typeof WordCardComponent>;

export const Light: Story = {
  render: () => {
    return (
      <ThemeProvider theme={themes.lightTheme}>
        <Box display="flex" flexDirection="column" gap="10px">
          <WordCardComponent
            {...props}
            sectionType="feelingsMetNeeds"
            cardDisplayName="Affectionate"
            modeOptions={["unselected", "met"]}
          />
          <WordCardComponent
            {...props}
            sectionType="feelingsUnmetNeeds"
            cardDisplayName="Afraid"
            modeOptions={["unselected", "unmet"]}
          />
          <WordCardComponent
            {...props}
            sectionType="needs"
            cardDisplayName="Connection"
            modeOptions={["unselected", "met", "unmet"]}
          />
        </Box>
      </ThemeProvider>
    );
  },
};

export const Dark: Story = {
  parameters: { backgrounds: { default: "dark" } },
  render: () => {
    return (
      <ThemeProvider theme={themes.darkTheme}>
        <Box display="flex" flexDirection="column" gap="10px">
          <WordCardComponent
            {...props}
            sectionType="feelingsMetNeeds"
            cardDisplayName="Affectionate"
            modeOptions={["unselected", "met"]}
          />
          <WordCardComponent
            {...props}
            sectionType="feelingsUnmetNeeds"
            cardDisplayName="Afraid"
            modeOptions={["unselected", "unmet"]}
          />
          <WordCardComponent
            {...props}
            sectionType="needs"
            cardDisplayName="Connection"
            modeOptions={["unselected", "met", "unmet"]}
          />
        </Box>
      </ThemeProvider>
    );
  },
};
