import React, { createContext, useContext } from "react";
import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

// Esta es tu configuración de tema extendida que incluye la fuente local y otros estilos
const customTheme = {
  ...theme,
  // Puedes agregar más personalizaciones de Tailwind aquí
};

const LexUI = createContext(customTheme);

LexUI.displayName = "LexUIThemeProvider";

function ThemeProvider({ value = customTheme, children }) {
  const mergedValue = merge(customTheme, value, { arrayMerge: combineMerge });

  return (
    <LexUI.Provider value={mergedValue}>{children}</LexUI.Provider>
  );
}

const useTheme = () => useContext(LexUI);

export { LexUI, ThemeProvider, useTheme };
