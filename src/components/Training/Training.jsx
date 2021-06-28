import React from 'react';
import styled from 'styled-components';
import Theme, { Title, ComponentContainer } from '../assets/styles/Theme';

export default function Training() {
  const ComponentContainerGreen = styled(ComponentContainer)`
    border-color: ${Theme.fiverrGreen};
  `;
  return (
    <ComponentContainerGreen>
      <Title>Training</Title>
    </ComponentContainerGreen>
  );
}
