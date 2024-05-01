"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { createSafeContext } from "@/context/createSafeContext";

type ThemeModeContextValue = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const [useThemeModeContext, ThemeModeContextProviderComponent] =
  createSafeContext<ThemeModeContextValue>();

interface Props {
  children: ReactNode;
}

const ThemeModeContextProvider: React.FC<Props> = ({ children }) => {
  let darkModeInitialState = false;

  if (typeof window !== "undefined") {
    darkModeInitialState = JSON.parse(
      localStorage.getItem("darkMode") ?? "false",
    ) as boolean;
  }

  const [darkMode, setDarkMode] = useState<boolean>(darkModeInitialState);

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", (!darkMode).toString());
    setDarkMode(!darkMode);
  };

  return (
    <ThemeModeContextProviderComponent value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeModeContextProviderComponent>
  );
};

export { ThemeModeContextProvider, useThemeModeContext };
