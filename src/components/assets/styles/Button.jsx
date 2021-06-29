import styled from 'styled-components';
import Theme from './Theme';

export const Button = styled.button`
  background-color: transparent;
  color: ${Theme.fiverrGreen};
  border: solid 2px;
  border-radius: 0.5rem;
  padding: 0.7rem;
  width: 10rem;
  margin: 1rem 0 1rem 0;
  font-family: 'Arial', sans-serif;
  &:hover {
    background-color: ${Theme.fiverrGreen};
    color: white;
  }
`;

export const SmallButton = styled(Button)`
  width: auto;
  margin: 0;
`;
