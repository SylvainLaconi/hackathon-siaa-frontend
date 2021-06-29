import styled from 'styled-components';
import Theme from './Theme';

const StyledInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  padding: 0.3rem;
  margin: 0.7rem 0.7rem 0.7rem 0;
  border: none;
  background-color: white;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    border: 1px solid ${Theme.fiverrGreen};
  }
  &:focus {
    outline: none;
    border: 1px solid ${Theme.fiverrGreen};
  }
`;

export default StyledInput;
