import { ThemeProvider } from 'styled-components';
import Theme from './components/assets/styles/Theme';
import GlobalStyle from './components/assets/styles/GlobalStyle';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
      <GlobalStyle />
      <UserProfile />
    </div>
  );
}

export default App;
