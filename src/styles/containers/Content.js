import styled from "styled-components";
import media from "../utils/media";

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  min-width: 30%;
  ${media.tablet`
    min-width: 30%;
  `}
  ${media.tablet`
    min-width: 70%;
  `}
  ${media.phone`
    min-width: 100%;
  `}
`;
