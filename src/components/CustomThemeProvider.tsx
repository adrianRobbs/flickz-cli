import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

type CTProviderType = {
  children: ReactNode;
};

function CustomThemeProvider({ children }: CTProviderType) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
