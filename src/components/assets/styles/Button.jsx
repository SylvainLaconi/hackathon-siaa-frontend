import styled from 'styled-components';

export const Button = styled.button`
  background-color: #1dbf73;
  color: white;
  border: solid 0px;
  border-radius: 6px;
  padding: 0.7rem;
  width: 10rem;
  margin: 1rem 0 1rem 0;
  font-family: 'Arial', sans-serif;
  &:hover {
    background-color: #d0f7e6;
    color: black;
  }
`;

export const SmallButton = styled(Button)`
  width: auto;
  margin: 0;
`;
