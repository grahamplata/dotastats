import styled from "styled-components";
import { Colors } from "../variables";
import media from "../utils/media";

export default styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: ${Colors.background};
  background-color: ${Colors.header};

  .inline {
    display: flex;
    align-items: center;
    flex-direction: row;
    ${media.phone`
      visibility: hidden;
      max-height: 20px;
    `}
  }

  .react-logo {
    max-width: 40px;
  }

  .redux-logo {
    max-width: 30px;
  }

  .dota-logo {
    padding-left: 6px;
    max-width: 30px;
  }
`;
