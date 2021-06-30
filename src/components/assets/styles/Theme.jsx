import styled from 'styled-components';

export const Sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
};

export const Devices = {
  mobile: `{min-width: ${Sizes.mobile}}`,
  tablet: `{min-width: ${Sizes.tablet}}`,
  laptop: `{min-width: ${Sizes.laptop}}`,
  desktop: `{min-width: ${Sizes.desktop}}`,
};

export const Container = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) => props.aiCenter && 'align-items:center'};
  ${(props) => props.acCenter && 'align-content:center'};
  ${(props) => props.jcCenter && 'justify-content:center'};
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
`;

const Theme = {
  fiverrGreen: '#1dbf73',
  fiverrYellow: '#d0e500',
  fiverrPink: '#ff80ae',
  fiverrOrange: '#ff7640',
  fiverrGreenLight: '#d0f7e6',
  fiverrYellowLight: '#f1f4cb',
  fiverrPinkLight: '#ffd3e2',
  fiverrOrangeLight: '#ffe0d4',
  fiverrGreenMedium: '#00732e',
  fiverrYellowMedium: '#687200',
  fiverrPinkMedium: '#be5272',
  fiverrOrangeMedium: '#8f2900',
  fiverrGreenDark: '#003912',
  fiverrYellowDark: '#254200',
  fiverrPinkDark: '#4d1727',
  fiverrOrangeDark: '#421300',
  fiverrDarkGray: '#d5d4d2',
};

export default Theme;
