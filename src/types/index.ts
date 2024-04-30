export type SetButtonStatusFunction = ({
  sectionIndex,
  cardIndex,
  wordButtonIndex,
  newStatus,
}: {
  sectionIndex: number;
  cardIndex: number;
  wordButtonIndex: number;
  newStatus: string;
}) => void;
