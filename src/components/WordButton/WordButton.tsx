import { useState, useEffect, memo } from "react";
import { Button } from "@mui/material";
import type { SetButtonStatusFunction } from "../../types";

type Mode = "unselected" | "met" | "unmet";

interface Props {
  sectionIndex?: number;
  cardIndex?: number;
  wordButtonIndex?: number;
  word: string;
  mode: Mode;
  view?: string;
  modes: string[];
  setButtonStatus: SetButtonStatusFunction | null;
}

const WordButton: React.FC<Props> = ({
  sectionIndex = 0,
  cardIndex = 0,
  wordButtonIndex = 0,
  word,
  mode,
  view = "all",
  modes,
  setButtonStatus,
}) => {
  const [modeState, setModeState] = useState<Mode>(mode);

  useEffect(() => setModeState(mode), [mode]);

  const onClick = () => {
    const nextMode = modes[
      (modes.indexOf(modeState) + 1) % modes.length
    ] as Mode;
    const newStatus = view !== "all" ? "unselected" : nextMode;

    // For testing interactivity in Storybook, this button can fall back
    // to internal state if it has not been passed a callback to set
    // parent state. This is slightly annoying and if a better way presents
    // itself, this will be eagerly updated.
    if (setButtonStatus) {
      setButtonStatus({ sectionIndex, cardIndex, wordButtonIndex, newStatus });
    } else {
      setModeState(newStatus);
    }
  };

  const isButtonVisible =
    view === "all" ||
    (view === "selected" && mode !== "unselected") ||
    mode === view;

  return isButtonVisible ? (
    <Button variant="wordButton" color={modeState} onClick={onClick}>
      {word}
    </Button>
  ) : null;
};

export default memo(WordButton);
