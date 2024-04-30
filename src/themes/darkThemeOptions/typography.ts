import type { TypographyOptions } from "@mui/material/styles/createTypography";
import { caveat } from "../fonts";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    cardHeading: React.CSSProperties;
    sectionHeading: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    cardHeading?: React.CSSProperties;
    sectionHeading?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cardHeading: true;
    sectionHeading: true;
  }
}

const typography: TypographyOptions = {
  h3: {
    color: "white",
    textAlign: "center",
    fontFamily: caveat.style.fontFamily,
    fontWeight: "700",
    borderRadius: "1rem",
    lineHeight: "1.2",
  },
  h4: {
    textAlign: "center",
    fontFamily: caveat.style.fontFamily,
    fontWeight: "700",
    lineHeight: "1",
  },
  button: {
    textTransform: "none",
  },
};

export default typography;
