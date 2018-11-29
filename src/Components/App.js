import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "../theme";
import Router from "./Router";

export default () => (
  <ThemeProvider theme={theme}>
    <>
      <Router />
      <GlobalStyle />
    </>
  </ThemeProvider>
);
