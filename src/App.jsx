import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import Theme from './components/assets/styles/Theme';
import GlobalStyle from './components/assets/styles/GlobalStyle';
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import NewPost from './components/NewPost/NewPost';
import UserContext from './components/assets/UserContext';
import HomePage from './components/HomePage/HomePage';
import Training from './components/Training/Training';
import GoodDeals from './components/GoodDeals/GoodDeals';
import 'react-toastify/dist/ReactToastify.css';
import TechActualities from './components/TechActualities/TechActualities';
import Forum from './components/Forum/Forum';
import Footer from './components/Footer/Footer';
import {
  MainContainer,
  SideContainer,
  CenterContainer,
} from './components/assets/styles/StyledApp';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);

  const getUserInfo = async () => {
    try {
      const dataUser =
        userName !== '' &&
        (await axios.get(
          `http://localhost:8000/api/user/lastname/${userName}`
        ));
      setUserInfo(dataUser.data[0]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingInfo(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [userName]);

  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
      <UserContext.Provider
        value={{
          isLogged,
          setIsLogged,
          userName,
          setUserName,
          userInfo,
          loadingInfo,
        }}
      >
        <Header />

        {isLogged ? (
          <MainContainer>
            <SideContainer>
              <UserProfile />
              <Training />
            </SideContainer>
            <CenterContainer>
              <NewPost />
              <Events />
              <TechActualities />
            </CenterContainer>
            <SideContainer>
              <GoodDeals />
              <Forum />
            </SideContainer>
          </MainContainer>
        ) : (
          <HomePage />
        )}
        <GlobalStyle />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
