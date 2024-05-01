import type { CardData, Mode } from "@/types";
import rawData from "@/data/words.json";

type RawCardData = { cardDisplayName: string; words: string[] }[];

const createSection = ({
  sectionType,
  sectionDisplayName,
  modeOptions,
  rawCardData,
}: {
  sectionType: string;
  sectionDisplayName: string;
  modeOptions: Mode[];
  rawCardData: RawCardData;
}) => {
  return {
    sectionType,
    sectionDisplayName,
    modeOptions,
    cardData: rawCardData.map(({ cardDisplayName, words }) => {
      return {
        cardDisplayName,
        wordButtonData: words.map((word) => ({
          word,
          mode: "unselected",
        })),
      } as CardData;
    }),
  };
};

const toolData = {
  sectionData: [
    createSection({
      sectionType: "feelingsMetNeeds",
      sectionDisplayName: "Feelings: Met Needs",
      modeOptions: ["unselected", "met"],
      rawCardData: rawData.feelings.metNeeds,
    }),
    createSection({
      sectionType: "feelingsUnmetNeeds",
      sectionDisplayName: "Feelings: Unmet Needs",
      modeOptions: ["unselected", "unmet"],
      rawCardData: rawData.feelings.unmetNeeds,
    }),
    createSection({
      sectionType: "needs",
      sectionDisplayName: "Needs",
      modeOptions: ["unselected", "met", "unmet"],
      rawCardData: rawData.needs,
    }),
  ],
};

export default toolData;
