import type { PaletteOptions } from "@mui/material/styles/createPalette";
import { grey } from "@mui/material/colors";

const palette: PaletteOptions = {
  mode: "dark",
  unselected: {
    main: grey[400],
    heading: grey[400],
    dark: "#1A202C",
  },
  selected: {
    main: "#FFFFFF",
  },
  met: {
    main: "green",
    heading: "#F0FFF4", // 50
    highlight: "#68D391", // 300
    border: "#38A169", // 500
    headingBg: "#38A169", // 500
    bg: "#1C4532", // 900
  },
  unmet: {
    main: "red",
    heading: "#FFF5F5",
    highlight: "#FC8181",
    border: "#E53E3E",
    headingBg: "#E53E3E",
    bg: "#63171B",
  },
  needs: {
    main: "blue",
    heading: "#EBF8FF",
    border: "#3182CE",
    headingBg: "#3182CE",
    bg: "#1A365D",
  },
  control: {
    bg: "#5F370E",
    border: "#D69E2E",
    main: "yellow",
  },
};

export default palette;
