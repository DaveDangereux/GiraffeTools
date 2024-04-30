"use client";

import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import baseThemeOptions from "./baseThemeOptions";
import darkThemeOptions from "./darkThemeOptions";

const lightTheme: ThemeOptions = responsiveFontSizes(
  createTheme(baseThemeOptions),
);

const darkTheme: ThemeOptions = responsiveFontSizes(
  createTheme(deepmerge(baseThemeOptions, darkThemeOptions)),
);

const themes = {
  lightTheme,
  darkTheme,
};

export default themes;
