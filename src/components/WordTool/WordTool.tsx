import Controls from "@/components/Controls";
import WordSection from "@/components/WordSection";
import toolData from "@/data/toolData";
import { shouldButtonRender } from "@/utils";
import { Box, Paper } from "@mui/material";
import { useCallback, useState } from "react";
import type {
  Mode,
  SectionData,
  SetButtonStatusFunction,
  ToolData,
  View,
} from "@/types";

const WordTool = () => {
  const [data, setData] = useState(toolData as ToolData);
  const [view, setView] = useState("all" as View);

  const setButtonStatus: SetButtonStatusFunction = useCallback(
    ({ sectionIndex, cardIndex, wordButtonIndex, newMode }) => {
      setData((currentData) => {
        const newData = { ...currentData };
        newData.sectionData[sectionIndex]!.cardData[cardIndex]!.wordButtonData[
          wordButtonIndex
        ]!.mode = newMode;
        return newData;
      });
    },
    [],
  );

  const cycleView = () => {
    const viewOptions: View[] = ["all", "selected", "met", "unmet"];
    const nextViewIndex = (viewOptions.indexOf(view) + 1) % viewOptions.length;
    setView(viewOptions[nextViewIndex]!);
  };

  // This horrible nested mapping function is horrible.
  // Pending better solution.
  const resetButtons = () => {
    window.scrollTo(0, 0);
    setView("all");
    setData((currentData: ToolData): ToolData => {
      const newData = {
        ...currentData,

        sectionData: currentData.sectionData.map((currentSectionData) => ({
          ...currentSectionData,
          cardData: currentSectionData.cardData.map((currentCardData) => ({
            ...currentCardData,
            wordButtonData: currentCardData.wordButtonData.map(
              (currentWordButtonData) => ({
                ...currentWordButtonData,
                mode: "unselected" as Mode,
              }),
            ),
          })),
        })),
      };

      return newData;
    });
  };

  const sections = data.sectionData.map((sectionData, sectionIndex) => {
    const shouldSectionRender = (sectionData: SectionData) => {
      return sectionData.cardData.some(({ wordButtonData }) =>
        wordButtonData.some(({ mode }) => shouldButtonRender(view, mode)),
      );
    };

    const { sectionType, sectionDisplayName, modeOptions, cardData } =
      sectionData;

    return (
      shouldSectionRender(sectionData) && (
        <WordSection
          key={sectionIndex}
          sectionType={sectionType}
          sectionIndex={sectionIndex}
          sectionDisplayName={sectionDisplayName}
          modeOptions={modeOptions}
          cardData={cardData}
          view={view}
          setButtonStatus={setButtonStatus}
        />
      )
    );
  });

  return (
    <Paper elevation={0} square sx={{ minHeight: "100vh" }}>
      <Box display="flex" flexDirection="column" paddingBottom="30px">
        {sections}
      </Box>
      <Controls view={view} cycleView={cycleView} resetButtons={resetButtons} />
    </Paper>
  );
};

export default WordTool;
