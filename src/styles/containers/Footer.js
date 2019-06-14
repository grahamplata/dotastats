import styled from "styled-components";
import { Colors } from "../variables";
import media from "../utils/media";

export default styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  color: ${Colors.background};
  background-color: ${Colors.header};

  .inline {
    display: flex;
    align-items: center;
    flex-direction: row;
    ${media.phone`
      visibility: hidden;
    `}
  }

  .react-logo {
    max-width: 70px;
  }

  .redux-logo {
    max-width: 50px;
  }

  .dota-logo {
    padding-left: 7px;
    max-width: 50px;
  }
`;
