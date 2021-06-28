import React from 'react';
import styled from 'styled-components';
import Theme, { Title, Container } from '../assets/styles/Theme';
import Button from '../assets/styles/Button';
import pictureGabrielle from '../assets/img/gabrielle.jpg';

export default function UserProfile() {
  const userData = {
    userName: 'Gabrielle',
    picture: { pictureGabrielle },
    job: 'Développeuse web front-end',
    contributions: 5,
    community1: 'Dev front-end',
    community2: 'dev back-end',
    community3: 'UX/UI design',
  };
  const ComponentContainer = styled(Container)`
    border: solid 2px ${Theme.fiverrYellow};
    border-radius: 0.5rem;
    width: 20%;
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
    font-size: 1.3rem;
  `;
  const ProfileText = styled.p`
    font-size: 0.9rem;
    line-height: 2em;
  `;
  const SmallerButton = styled(Button)`
    width: 9rem;
  `;
  const AddCommunityContainer = styled(Container)`
    margin-top: 3%;
    width: 90%;
    justify-content: space-around;
  `;
  return (
    <ComponentContainer flex column aiCenter jcCenter>
      <Title>Bonjour, {userData.userName} !</Title>
      <ImageAvatar src={userData.picture} />
      <ProfileContainer flex column aiCenter jcCenter>
        <ProfileTitle>{userData.job}</ProfileTitle>
        <ProfileText>
          Nombre de contributions : {userData.contributions}
        </ProfileText>
      </ProfileContainer>
      <AddCommunityContainer flex row>
        {userData.community1 && userData.community1}
        {userData.community2 && userData.community2}
        {userData.community3 && userData.community3}
        <SmallerButton>Add a community</SmallerButton>
      </AddCommunityContainer>
    </ComponentContainer>
  );
}
