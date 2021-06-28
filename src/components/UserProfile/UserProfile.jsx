import React from 'react';
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';
import Select from '../assets/styles/Select';
import Button from '../assets/styles/Button';
import picture from '../assets/img/milad.jpg';

export default function UserProfile() {
  const userData = {
    userName: 'Milad',
    job: 'Développeur fullstack',
    contributions: 5,
    community1: 'Dev front-end',
    community2: 'Dev back-end',
    community3: 'UX/UI design',
  };
  const ComponentContainer = styled(Container)`
    border: solid 2px ${Theme.fiverrYellow};
    border-radius: 0.5rem;
    width: 20%;
    padding: 3%;
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
    background-color: ${Theme.colorLightgrey};
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
    <ComponentContainer flex column aiCenter jcCenter>
      <Title>Hello, {userData.userName} !</Title>
      <ImageAvatar src={picture} />
      <ProfileContainer flex column aiCenter jcCenter>
        <ProfileTitle>{userData.job}</ProfileTitle>
        <ProfileText>Contributions : {userData.contributions}</ProfileText>
      </ProfileContainer>
      <AddCommunityContainer flex row>
        {userData.community1 && <Community>{userData.community1}</Community>}
        {userData.community2 && <Community>{userData.community2}</Community>}
        {userData.community3 && <Community>{userData.community3}</Community>}
      </AddCommunityContainer>
      <AddCommunityContainer>
        <Select>
          <option value="" disabled selected hidden>
            Communities
          </option>
          <option value="graphism/design">Graphism/Design</option>
          <option value="digital marketing">Digital marketing</option>
          <option value="writing/translation">Writing/Translation</option>
          <option value="video/animation">Video/Animation</option>
          <option value="music/audio">Music/Audio</option>
          <option value="programming/tech">Programming/Tech</option>
          <option value="data">Data</option>
        </Select>
        <AddCommunityButton>Add a community</AddCommunityButton>
      </AddCommunityContainer>
    </ComponentContainer>
  );
}
