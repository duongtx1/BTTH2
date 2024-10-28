import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./route.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5f5a56",
      light: "#eaddee",
    },
    secondary: {
      main: "#f1bd8e",
      light: "#fffff7",
    },
    warning: {
      main: "#bf6159",
    },
    background: {
      default: "#fffffA",
    },
  },
  typography: {
    fontFamily: "Playwrite GB S",
    fontWeightRegular: "500",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
