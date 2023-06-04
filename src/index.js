import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RoutesComponent from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";

const colors = {
  brand: {
    initialBackground: "white",
    secondary: "#232A2F",
    white: "#FFFFFF",
    grey: "#E5E5E5",
    darkSecondary: "rgba(35, 42, 47, 0.7)",
    redDelete: "#A80202",
  },
};

const theme_material = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: ["40em", "52em", "64em"],
});

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnHover
    />
    <ThemeProvider theme={theme_material}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RoutesComponent />
        </Provider>
      </ChakraProvider>
    </ThemeProvider>
  </Fragment>
);
reportWebVitals();
