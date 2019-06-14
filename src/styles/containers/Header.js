import styled from "styled-components";
import { Colors } from "../variables";

export default styled.header`
  background-color: ${Colors.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  font-size: calc(8px + 2vmin);
  color: ${Colors.background};
`;
