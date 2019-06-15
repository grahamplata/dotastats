import styled from "styled-components";
import { Colors } from "../variables";
import media from "../utils/media";

export default styled.header`
  background-color: ${Colors.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: ${Colors.background};

  h1 {
    margin-bottom: 20px;
    ${media.phone`
      visibility: hidden;
      font-size: 0;
    `}
  }
`;
