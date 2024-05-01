"use client";

import React from "react";

export const createSafeContext = <DefaultValueType,>() => {
  const context = React.createContext<DefaultValueType | undefined>(undefined);

  const useSafeContext = () => {
    const contextValue = React.useContext(context);
    if (!contextValue) {
      throw new Error("useSafeContext must be inside a Provider with a value");
    }
    return contextValue;
  };

  return [useSafeContext, context.Provider] as const;
};
