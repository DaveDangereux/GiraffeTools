import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import themes from "../../themes";
import type {
  SetButtonStatusFunction,
  View,
  WordButtonData,
} from "../../types";
import WordSectionComponent from "./WordSection";

export default {
  title: "Giraffe Tools/Organisms/Word Section",
  component: WordSectionComponent,
} as Meta<typeof WordSectionComponent>;

interface Props {
  sectionIndex: number;
  view: View;
  setButtonStatus: SetButtonStatusFunction | null;
}
const props: Props = {
  sectionIndex: 0,
  view: "all",
  setButtonStatus: null,
};

type Story = StoryObj<typeof WordSectionComponent>;

const wordButtonData = Array(5).fill({
  word: "word",
  mode: "unselected",
}) as WordButtonData[];

export const Light: Story = {
  render: () => {
    return (
      <ThemeProvider theme={themes.lightTheme}>
        <Box display="flex" flexDirection="column" gap="10px">
          <WordSectionComponent
            {...props}
            sectionType="feelingsMetNeeds"
            sectionDisplayName="Feelings: Met Needs"
            modeOptions={["unselected", "met"]}
            cardData={[
              {
                cardDisplayName: "Affectionate",
                wordButtonData,
              },
              {
                cardDisplayName: "Engaged",
                wordButtonData,
              },
            ]}
          />
          <WordSectionComponent
            {...props}
            sectionType="feelingsUnmetNeeds"
            sectionDisplayName="Feelings: Unmet Needs"
            modeOptions={["unselected", "unmet"]}
            cardData={[
              {
                cardDisplayName: "Afraid",
                wordButtonData,
              },
              {
                cardDisplayName: "Annoyed",
                wordButtonData,
              },
            ]}
          />
          <WordSectionComponent
            {...props}
            sectionType="needs"
            sectionDisplayName="Needs"
            modeOptions={["unselected", "met", "unmet"]}
            cardData={[
              {
                cardDisplayName: "Connection",
                wordButtonData,
              },
              {
                cardDisplayName: "Physical Well-Being",
                wordButtonData,
              },
            ]}
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
          <WordSectionComponent
            {...props}
            sectionType="feelingsMetNeeds"
            sectionDisplayName="Feelings: Met Needs"
            modeOptions={["unselected", "met"]}
            cardData={[
              {
                cardDisplayName: "Affectionate",
                wordButtonData,
              },
              {
                cardDisplayName: "Engaged",
                wordButtonData,
              },
            ]}
          />
          <WordSectionComponent
            {...props}
            sectionType="feelingsUnmetNeeds"
            sectionDisplayName="Feelings: Unmet Needs"
            modeOptions={["unselected", "unmet"]}
            cardData={[
              {
                cardDisplayName: "Afraid",
                wordButtonData,
              },
              {
                cardDisplayName: "Annoyed",
                wordButtonData,
              },
            ]}
          />
          <WordSectionComponent
            {...props}
            sectionType="needs"
            sectionDisplayName="Needs"
            modeOptions={["unselected", "met", "unmet"]}
            cardData={[
              {
                cardDisplayName: "Connection",
                wordButtonData,
              },
              {
                cardDisplayName: "Physical Well-Being",
                wordButtonData,
              },
            ]}
          />
        </Box>
      </ThemeProvider>
    );
  },
};
