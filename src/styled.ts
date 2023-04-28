import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'PTRootUIWebRegular';
    src: url('/fonts/pt-root-ui_regular.woff') format('woff2'),
    url('/fonts/pt-root-ui_regular.woff2') format('woff');
  }

  * {
    font-family: PTRootUIWebRegular;
    font-weight: 400;
  }

  a {
    color: #EBEBEB;
  }

  body {
    margin: 50px auto;
    padding: 0 calc(20px - (100vw - 100%)) 0 0;
    background-color: #1e1e1e;
     
  }`

export const mainTheme: DefaultTheme = {
  colors: {
    primaryTextColor: "#EBEBEB",
    secondaryTextColor: "#606060",
    tertiaryTextColor: "#d2d2d2"
  },
  bgColor: {
    primary: "#252525",
    secondary: "#2B2B2B",
    tertiary: "#313131"
  },
  maxWidth: "584px"
}