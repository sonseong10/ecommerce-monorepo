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
  previewTabs: {
    canvas: { hidden: true },
  },
  viewMode: "docs",
};
const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme as DefaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
    // (Story, { parameters }) => {
    //   // 👇 Make it configurable by reading from parameters
    //   const { pageLayout } = parameters;
    //   switch (pageLayout) {
    //     case 'page':
    //       return (
    //         <div className="page-layout">
    //           {/* <ThemeProvider theme={lightTheme as DefaultTheme}> */}
    //             <GlobalStyle />
    //             <Story />
    //           {/* </ThemeProvider> */}
    //         </div>
            
    //       );
    //     case 'page-mobile':
    //       return (
    //         <div className="page-mobile-layout">
    //           {/* <ThemeProvider theme={lightTheme as DefaultTheme}> */}
    //             <GlobalStyle />
    //             <Story />
    //           {/* </ThemeProvider> */}
    //         </div>
    //       );
    //     default:
    //       // In the default case, don't apply a layout
    //       return <>
    //         <GlobalStyle />
    //         <Story />
    //         </>
    //       // <ThemeProvider theme={lightTheme as DefaultTheme}>
    //       {/* </ThemeProvider>; */}
    //   }
    // },
  ],
};

export default preview;
