"use client";

import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import baseThemeOptions from "./baseThemeOptions";
import darkThemeOptions from "./darkThemeOptions";

export const lightTheme: ThemeOptions = responsiveFontSizes(
  createTheme(baseThemeOptions),
);

export const darkTheme: ThemeOptions = responsiveFontSizes(
  createTheme(deepmerge(baseThemeOptions, darkThemeOptions)),
);

export const themes = {
  lightTheme,
  darkTheme,
};
