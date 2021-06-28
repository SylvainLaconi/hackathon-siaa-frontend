import styled from 'styled-components';
import Theme from './Theme';

const Button = styled.button`
  background-color: transparent;
  color: ${Theme.fiverrGreen};
  border: solid 2px;
  border-radius: 0.5rem;
  padding: 0.7rem;
  width: 10rem;
  margin-top: 1rem;
  font-family: 'Arial', sans-serif;
  &:hover {
    background-color: ${Theme.fiverrGreen};
    color: white;
  }
`;

export default Button;
