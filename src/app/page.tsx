"use client";

import { ThemeProvider } from "@mui/material/styles";
import { useThemeModeContext } from "../context/ThemeModeContext";
import themes from "../themes";

export default function Home() {
  const { darkMode } = useThemeModeContext();

  return (
    <ThemeProvider theme={darkMode ? themes.darkTheme : themes.lightTheme}>
      <h1>Home</h1>
    </ThemeProvider>
  );
}
