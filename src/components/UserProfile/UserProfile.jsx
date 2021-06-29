/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';
import UserContext from '../assets/UserContext';
import Select from '../assets/styles/Select';
import { Button } from '../assets/styles/Button';

export default function UserProfile() {
  const { userId } = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userCounter, setUserCounter] = useState(0);
  const [loadingCounter, setLoadingCounter] = useState(true);
  const [userCommunities, setUserCommunities] = useState([]);
  const [loadingCommunity, setLoadingCommunity] = useState(true);
  const [communityList, setCommunityList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [selectedCommunity, setSelectedCommunity] = useState('');

  const getUserInfo = async () => {
    try {
      const dataUser = await axios.get(
        `http://localhost:8000/api/user/${userId}`
      );
      setUserData(dataUser.data[0]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingUser(false);
    }
  };

  const getUserCounter = async () => {
    try {
      const dataCounter = await axios.get(
        `http://localhost:8000/api/post/${userId}`
      );
      setUserCounter(dataCounter.data[0]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingCounter(false);
    }
  };

  const getUserCommunities = async () => {
    try {
      const dataCommunity = await axios.get(
        `http://localhost:8000/api/user/community/${userId}`
      );
      setUserCommunities(dataCommunity.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingCommunity(false);
    }
  };

  const getCommunityList = async () => {
    try {
      const dataList = await axios.get(`http://localhost:8000/api/community`);
      setCommunityList(dataList.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    getUserInfo();
    getUserCounter();
    getUserCommunities();
    getCommunityList();
  }, []);

  const { firstname, job, user_picture } = !loadingUser && userData;

  const { count } = !loadingCounter && userCounter;

  const newCommunityName =
    !loadingList && selectedCommunity !== '' && selectedCommunity;

  const newCommunityId =
    !loadingList &&
    selectedCommunity !== '' &&
    communityList.filter(
      (community) => community.community_name === newCommunityName
    )[0].id;

  console.log(newCommunityId);

  const ComponentContainer = styled(Container)`
    border: solid 2px ${Theme.fiverrYellow};
    border-radius: 0.5rem;
    width: 20%;
    padding: 3%;
    margin: 1%;
  `;
  const ImageAvatar = styled.img`
    clip-path: ellipse(50% 50%);
    object-fit: cover;
    width: 10rem;
    height: 10rem;
  `;
  const ProfileContainer = styled(Container)`
    margin-top: 5%;
    padding: 0 7% 3% 7%;
  `;
  const ProfileTitle = styled.h2`
    font-size: 1.2rem;
  `;
  const ProfileText = styled.p`
    font-size: 0.9rem;
  `;
  const AddCommunityButton = styled(Button)`
    width: 9rem;
    margin-left: 3rem;
  `;
  const Community = styled.div`
    background-color: ${Theme.fiverrYellow};
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    width: 9rem;
    text-align: center;
    vertical-align: middle;
  `;
  const AddCommunityContainer = styled(Container)`
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  `;
  return (
    !loadingUser &&
    !loadingCounter &&
    !loadingCommunity &&
    !loadingList && (
      <ComponentContainer flex column aiCenter jcCenter>
        <Title>Hello, {firstname} !</Title>
        <ImageAvatar src={user_picture} />
        <ProfileContainer flex column aiCenter jcCenter>
          <ProfileTitle>{job}</ProfileTitle>
          <ProfileText>Contributions : {count}</ProfileText>
        </ProfileContainer>
        <AddCommunityContainer flex row>
          {userCommunities.map((community) => (
            <Community key={community.id}>{community.community_name}</Community>
          ))}
        </AddCommunityContainer>
        <Container flex row>
          <Select
            value={selectedCommunity}
            onChange={(e) => setSelectedCommunity(e.target.value)}
          >
            {communityList.map((community) => (
              <option key={community.id}>{community.community_name}</option>
            ))}
          </Select>
          <AddCommunityButton>Add a community</AddCommunityButton>
        </Container>
      </ComponentContainer>
    )
  );
}
