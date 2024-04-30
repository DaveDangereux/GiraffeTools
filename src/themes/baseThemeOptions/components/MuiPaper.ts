import type { Components } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    wordCard: true;
  }
}

const MuiPaper: Components["MuiPaper"] = {
  variants: [
    {
      props: { variant: "wordCard" },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
        borderRadius: "20px",
        border: "2px solid",
        minWidth: "320px",
        maxWidth: "640px",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  ],
};

export default MuiPaper;
