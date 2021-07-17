import React from 'react';

import {
  Container,
  PhotoKit,
  Description,
  Title,
  Content,
  SubjectIcon,
  Subject,
  BottomLine,
} from './styles';

import kitImg from '../../assets/chuvaMacabra.jpg';
import subjIcon from '../../assets/chemicalIcon.png';

export const Kit = () => {
  return (
    <Container>
      <PhotoKit source={kitImg} />

      <Description>
        <Title>Chuva Macabra</Title>
        <Content>
          <SubjectIcon source={subjIcon} />
          <Subject>Química</Subject>
        </Content>
        <BottomLine />
      </Description>
    </Container>
  );
};
