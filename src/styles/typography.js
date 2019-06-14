import { Colors } from "./variables";

export default `
  html,
  body {
    font-size: 17px;
    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1600px) {
      font-size: 19px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5, 
  h6, 
  p,
  img,
  table {
    margin-top: 2.8em;
    color: ${Colors.h};
    margin-bottom: 2.2em;
    max-width: 100%;
  }
  th, td {
    text-align: left;
    padding-bottom: 1em;
    padding-right: 1em;
  }
`;
