import styled from "styled-components";
import { Colors } from "../variables";

export const Input = styled.input`
  font-size: 1em;
  padding: 0.45em;
  outline: none;
  border: 1px solid black;
  border-radius: 5px 0px 0px 5px;
`;

export const SubmitInput = styled.input.attrs(({ inputType }) => ({
  type: inputType
}))`
  font-size: 1em;
  outline: none;
  margin-left: -1px;
  padding: 0.45em;
  color: white;
  border: 1px solid black;
  border-radius: 0px 5px 5px 0px;
  background-color: ${Colors.header};

  &:hover {
    background-color: ${Colors.header2};
  }

  &:active {
    background-color: ${Colors.header3};
  }
`;
