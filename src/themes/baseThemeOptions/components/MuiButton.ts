import paletteOptions from "@/themes/baseThemeOptions/palette";
import { robotoMono } from "@/fonts";
import type { Components } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";

const palette = createPalette(paletteOptions);

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    wordButton: true;
    control: true;
  }
  interface ButtonPropsColorOverrides {
    unselected: true;
    met: true;
    unmet: true;
  }
}

const MuiButton: Components["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    sx: {
      whiteSpace: "nowrap",
    },
  },
  variants: [
    {
      props: { variant: "wordButton" },
      style: {
        padding: "4px 10px",
        fontFamily: robotoMono.style.fontFamily,
        fontWeight: "400",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "&:hover": {
          backgroundColor: "white",
        },
      },
    },
    {
      props: { variant: "wordButton", color: "unselected" },
      style: {
        color: palette.unselected.main,
      },
    },
    {
      props: { variant: "wordButton", color: "met" },
      style: {
        color: palette.selected.main,
        outlineStyle: "solid",
        outlineWidth: "3px",
        outlineColor: palette.met.highlight,
      },
    },
    {
      props: { variant: "wordButton", color: "unmet" },
      style: {
        color: palette.selected.main,
        outlineStyle: "solid",
        outlineWidth: "3px",
        outlineColor: palette.unmet.highlight,
      },
    },
    {
      props: { variant: "control" },
      style: {
        fontSize: "0.7rem",
        fontFamily: robotoMono.style.fontFamily,
        padding: "0 5px",
        backgroundColor: palette.control.bg,
        border: "2px solid",
        borderRadius: "15px",
        borderColor: palette.control.border,
        color: palette.control.contrastText,
        fontWeight: "600",
        "&:hover": {
          backgroundColor: palette.control.bg,
        },
        "&:active": {
          backgroundColor: palette.control.bg,
        },
      },
    },
  ],
};

export default MuiButton;
