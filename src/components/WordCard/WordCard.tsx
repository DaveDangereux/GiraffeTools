import { Box, Paper, Typography } from "@mui/material";
import type { Mode, SetButtonStatusFunction, View } from "../../types";
import WordButton from "../WordButton";
import shouldButtonRender from "./shouldButtonRender";

interface Props {
  sectionType: string;
  sectionIndex: number;
  cardIndex: number;
  cardDisplayName: string;
  wordButtonData: { word: string; mode: Mode }[];
  view: View;
  modeOptions: Mode[];
  setButtonStatus: SetButtonStatusFunction | null;
}

const WordCard: React.FC<Props> = ({
  sectionType,
  sectionIndex,
  cardIndex,
  cardDisplayName,
  wordButtonData,
  view,
  modeOptions,
  setButtonStatus,
}) => {
  const wordButtons = wordButtonData.map(({ word, mode }, wordButtonIndex) => {
    return (
      shouldButtonRender(view, mode) && (
        <WordButton
          key={wordButtonIndex}
          sectionIndex={sectionIndex}
          cardIndex={cardIndex}
          wordButtonIndex={wordButtonIndex}
          word={word}
          mode={mode}
          view={view}
          modeOptions={modeOptions}
          setButtonStatus={setButtonStatus}
        />
      )
    );
  });

  const colorMap = new Map([
    ["feelingsMetNeeds", "met"],
    ["feelingsUnmetNeeds", "unmet"],
    ["needs", "needs"],
  ]);

  const backgroundColor = `${colorMap.get(sectionType)}.bg`;
  const borderColor = `${colorMap.get(sectionType)}.border`;
  const cardHeadingColor = `${colorMap.get(sectionType)}.heading`;

  return (
    <Paper
      variant="wordCard"
      sx={{
        backgroundColor,
        borderColor,
      }}
    >
      <Typography variant="h4" color={cardHeadingColor}>
        {cardDisplayName}
      </Typography>
      <Box display="flex" flexWrap="wrap" gap="10px" justifyContent="center">
        {wordButtons}
      </Box>
    </Paper>
  );
};

export default WordCard;
