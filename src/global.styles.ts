import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "StratosSkyeng";
        src: local("StratosSkyeng"),
        url("/fonts/StratosSkyeng.woff2") format("woff2"),
        url("/fonts/StratosSkyeng.woff") format("woff");
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: "StratosSkyeng";
        src: local("StratosSkyeng"),
        url("/fonts/StratosBold.woff2") format("woff2"),
        url("/fonts/StratosBold.woff") format("woff");
        font-weight: 700;
        font-style: normal;
      }

      html,
body {
font-family: StratosSkyeng, sans-serif;
font-size: 24px;
font-weight: 400;
box-sizing: border-box;
height: 100%;
}
.container {
    max-width: 1160px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    position: relative;
  }
  button {
    border: none;
  }
  #root {
    height: 100%;
  }
`
