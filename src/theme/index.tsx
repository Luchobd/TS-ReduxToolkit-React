import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material"; // Setea todos los estilos
import StyledEngineProvider from "@mui/material/StyledEngineProvider"; // Para manejar los styles component

import { useCustomSelector } from "hooks/redux";

interface Props {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useCustomSelector((state) => state.settings);

  const isLight = themeMode === "light";

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00ff00",
      },
      mode: isLight ? "light" : "dark",
    },
  });

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
