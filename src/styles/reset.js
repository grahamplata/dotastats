import { Fonts } from "./variables";

export default `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${Fonts.basic};
    font-size: 100%;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    image-rendering: optimizequality;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  img {
    width: 100%;
  }
`;
