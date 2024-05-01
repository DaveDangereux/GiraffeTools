import type { CardData, Mode } from "@/types";

export type SectionData = {
  sectionType: string;
  sectionDisplayName: string;
  modeOptions: Mode[];
  cardData: CardData[];
};
