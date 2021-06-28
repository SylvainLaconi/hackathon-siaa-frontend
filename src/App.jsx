import { ThemeProvider } from 'styled-components';
import Theme from './components/assets/styles/Theme';
import GlobalStyle from './components/assets/styles/GlobalStyle';
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header';
import NewPost from './components/NewPost/NewPost';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
      <Header />
      <GlobalStyle />
      <UserProfile />
      <NewPost />
    </div>
  );
}

export default App;
