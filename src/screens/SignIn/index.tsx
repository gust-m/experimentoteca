import React from 'react';

import {
  Container,
  Content,
  Background,
  Title,
  Subtitle,
  Text,
  LoginButtonContainer,
  ButtonIcon,
  VerticalLine,
} from './styles';

import backgroundImg from '../../assets/background.png';
import visiterIcon from '../../assets/visiterIcon.png';

export const SignIn = () => {
  return (
    <Container>
      <Content>
        <Background
          source={backgroundImg}
          style={{ width: 340, height: 300 }}
        />

        <Title>Aprenda com a</Title>
        <Title>Experimentoteca</Title>

        <Subtitle>
          <Text>Use os kits da nossa Experimentoteca para{'\n'}</Text>
          <Text>aprender de uma forma diferente!</Text>
        </Subtitle>

        <LoginButtonContainer>
          <ButtonIcon source={visiterIcon} />
          <VerticalLine />
          <Text>Entrar como visitante</Text>
        </LoginButtonContainer>
      </Content>
    </Container>
  );
};
