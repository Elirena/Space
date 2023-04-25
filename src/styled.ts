import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    color: #EBEBEB;
  }
  body {
    margin: 50px auto;
    padding: 0;
    background-color: #1e1e1e;
}`

export const mainTheme: DefaultTheme = {
  colors: {
    primaryTextColor: "#EBEBEB",
    secondaryTextColor: "#606060"
  },
  bgColor: {
    primary: "#252525",
    secondary: "#2B2B2B",
    tertiary: "#313131"
  },
  maxWidth: "584px"
}