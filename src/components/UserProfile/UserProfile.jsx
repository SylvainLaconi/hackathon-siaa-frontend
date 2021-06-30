/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Theme, { Title, Container } from '../assets/styles/Theme';
import UserContext from '../assets/UserContext';
import Select from '../assets/styles/Select';
import { Button } from '../assets/styles/Button';

const ComponentContainer = styled(Container)`
  border: solid 3px ${Theme.fiverrYellow};
  border-radius: 6px;
`;
const ImageAvatar = styled.img`
  clip-path: ellipse(50% 50%);
  object-fit: cover;
  width: 10rem;
  height: 10rem;
`;
const ProfileContainer = styled(Container)``;
const ProfileTitle = styled.h2`
  font-size: 1.2rem;
`;
const ProfileText = styled.p`
  font-size: 0.9rem;
`;
const AddCommunityButton = styled(Button)`
  width: 40%;
  margin-left: 1rem;
`;
const Community = styled.div`
  background-color: ${Theme.fiverrYellow};
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  width: 40%;
  text-align: center;
  vertical-align: middle;
`;
const AddCommunityContainer = styled(Container)`
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export default function UserProfile() {
  const { userInfo, loadingInfo, setNewChange, newChange } =
    useContext(UserContext);

  const [userCounter, setUserCounter] = useState(0);
  const [loadingCounter, setLoadingCounter] = useState(true);
  const [userCommunities, setUserCommunities] = useState([]);
  const [loadingCommunity, setLoadingCommunity] = useState(true);
  const [communityList, setCommunityList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [newCommunity, setNewCommunity] = useState(false);

  const userId = !loadingInfo && userInfo.user_id;

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
    getUserCounter();
    getUserCommunities();
    getCommunityList();
  }, [newCommunity, userInfo]);

  const { firstname, job, user_picture } = !loadingInfo && userInfo;

  const { count } = !loadingCounter && userCounter;

  const newCommunityName =
    !loadingList && selectedCommunity !== '' && selectedCommunity;

  const newCommunityId =
    !loadingList &&
    selectedCommunity !== '' &&
    communityList.filter(
      (community) => community.community_name === newCommunityName
    )[0].id;

  const postNewCommunity = async () => {
    try {
      await axios.post('http://localhost:8000/api/community', {
        user_id: userId,
        community_id: newCommunityId,
      });
      setNewCommunity(true);
      setNewChange(!newChange);
      toast.success('Community correctly added');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.error(`${error.message}`);
    } finally {
      setNewCommunity(false);
    }
  };

  return (
    !loadingInfo &&
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
            <option>-- Select community --</option>
            {communityList.map((community) => (
              <option key={community.id}>{community.community_name}</option>
            ))}
          </Select>
          <AddCommunityButton
            onClick={selectedCommunity !== '' && postNewCommunity}
          >
            Add a community
          </AddCommunityButton>
        </Container>
      </ComponentContainer>
    )
  );
}
