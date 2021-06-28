import { ThemeProvider } from 'styled-components';
import Theme from './components/assets/styles/Theme';
import GlobalStyle from './components/assets/styles/GlobalStyle';
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header';
import Training from './components/Training/Training';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
      <Header />
      <GlobalStyle />
      <UserProfile />
      <Training />
    </div>
  );
}

export default App;
