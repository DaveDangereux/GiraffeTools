import type { Mode } from "@/types";

export type SetButtonStatusFunction = ({
  sectionIndex,
  cardIndex,
  wordButtonIndex,
  newMode,
}: {
  sectionIndex: number;
  cardIndex: number;
  wordButtonIndex: number;
  newMode: Mode;
}) => void;
