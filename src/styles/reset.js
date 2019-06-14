import { Colors, Fonts } from "./variables";

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
  },
  nav,
  header,
  footer,
  section {
    display: block;
  }
  del {
    text-decoration: line-through;
  }
  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }
  img {
    border: 0;
  }
  button {
    appearance: none;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    margin-top: .5em;
  }
  header {
    clear: both;
  }
  a {
    text-decoration: none;
    color: ${Colors.h};
  }
  img {
    width: 100%;
  }

  .Dota-logo {
    animation: Dota-logo-spin infinite 20s linear;
    height: 15vmin;
    pointer-events: none;
    margin-bottom: 30px;
  }
  
  @keyframes Dota-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
