import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.img`
  animation: ${rotate} 5s linear infinite;
  max-width: 8vh;
`;
