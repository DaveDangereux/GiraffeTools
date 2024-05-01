import type { CardData, Mode } from "./";

export type ToolData = {
  sectionData: {
    sectionType: string;
    sectionDisplayName: string;
    modeOptions: Mode[];
    cardData: CardData[];
  }[];
};
