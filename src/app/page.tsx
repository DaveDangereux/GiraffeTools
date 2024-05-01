"use client";

import { useThemeModeContext } from "@/context/ThemeModeContext";
import { themes } from "@/themes";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const { darkMode } = useThemeModeContext();

  return (
    <ThemeProvider theme={darkMode ? themes.darkTheme : themes.lightTheme}>
      <h1>Home</h1>
    </ThemeProvider>
  );
}
