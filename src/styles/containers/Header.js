import styled from "styled-components";
import { Colors } from "../variables";

export default styled.header`
  background-color: ${Colors.header};
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
