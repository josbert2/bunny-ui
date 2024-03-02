import React, { createContext, useContext } from "react";

import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

const LexUI = createContext(theme);

LexUI.displayName = "LexUIThemeProvider";

function ThemeProvider({ value = theme, children }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <LexUI.Provider value={mergedValue}>{children}</LexUI.Provider>
  );
}

const useTheme = () => useContext(LexUI);



export { LexUI, ThemeProvider, useTheme };
