import { ThemeProvider } from 'styled-components';
import Theme from './components/assets/styles/Theme';
import GlobalStyle from './components/assets/styles/GlobalStyle';
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import NewPost from './components/NewPost/NewPost';
import Training from './components/Training/Training';
import TechActualities from './components/TechActualities/TechActualities';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
      <Header />
      <GlobalStyle />
      <UserProfile />
      <NewPost />
      <TechActualities />
      <Events />
      <Training />
    </div>
  );
}

export default App;
