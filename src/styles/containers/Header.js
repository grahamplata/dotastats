import styled from "styled-components";
import { Colors } from "../variables";
import media from "../utils/media";

export default styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%
  padding-top: 35px;
  padding-bottom: 35px;
  font-size: calc(8px + 2vmin);
  color: ${Colors.background};
  background-color: ${Colors.header};

  h1 {
    padding-top: 35px;
    padding-bottom: 20px;
    ${media.phone`
      padding-top: 0px;
      padding-bottom: 0px;
      visibility: hidden;
      font-size: 0;
    `}
  }
`;
