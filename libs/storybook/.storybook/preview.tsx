import { DefaultTheme, ThemeProvider } from "styled-components";
import { lightTheme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/globalStyle";
import React from "react";
import { Preview } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  
};
const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme as DefaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
