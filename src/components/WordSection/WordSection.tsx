import WordCard from "@/components/WordCard";
import type { CardData, Mode, SetButtonStatusFunction, View } from "@/types";
import { shouldButtonRender } from "@/utils";
import { Box, Typography } from "@mui/material";

interface Props {
  sectionType: string;
  sectionIndex: number;
  sectionDisplayName: string;
  modeOptions: Mode[];
  cardData: {
    cardDisplayName: string;
    wordButtonData: { word: string; mode: Mode }[];
  }[];
  view: View;
  setButtonStatus: SetButtonStatusFunction | null;
}

const WordSection = ({
  sectionType,
  sectionIndex,
  sectionDisplayName,
  modeOptions,
  cardData,
  view,
  setButtonStatus,
}: Props) => {
  const cards = cardData.map((cardData, cardIndex) => {
    const shouldCardRender = ({ wordButtonData }: CardData) => {
      return wordButtonData.some(({ mode }) => shouldButtonRender(view, mode));
    };

    const { cardDisplayName, wordButtonData } = cardData;

    return (
      shouldCardRender(cardData) && (
        <WordCard
          key={cardIndex}
          sectionType={sectionType}
          sectionIndex={sectionIndex}
          cardIndex={cardIndex}
          cardDisplayName={cardDisplayName}
          wordButtonData={wordButtonData}
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

  const sectionHeadingBackgroundColor = `${colorMap.get(
    sectionType,
  )}.headingBg`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="640px"
      minWidth="320px"
      width="100%"
      gap="10px"
      margin="auto"
      p="10px 10px 20px"
    >
      <Typography
        variant="h3"
        sx={{ backgroundColor: sectionHeadingBackgroundColor }}
      >
        {sectionDisplayName}
      </Typography>
      {cards}
    </Box>
  );
};

export default WordSection;
