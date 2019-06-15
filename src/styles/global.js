import { createGlobalStyle } from "styled-components";
import resets from "./reset";
import background from "./background";

export default createGlobalStyle`
  ${resets}
  ${background}
  `;
