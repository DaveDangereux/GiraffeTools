import type { CardData, Mode } from "./";

export type SectionData = {
  sectionType: string;
  sectionDisplayName: string;
  modeOptions: Mode[];
  cardData: CardData[];
};
