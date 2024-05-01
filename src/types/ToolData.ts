import type { CardData, Mode } from "@/types";

export type ToolData = {
  sectionData: {
    sectionType: string;
    sectionDisplayName: string;
    modeOptions: Mode[];
    cardData: CardData[];
  }[];
};
