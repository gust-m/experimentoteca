import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Main');
  };

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

        <LoginButtonContainer onPress={handleSignIn} activeOpacity={0.7}>
          <ButtonIcon source={visiterIcon} />
          <VerticalLine />
          <Text>Entrar como visitante</Text>
        </LoginButtonContainer>
      </Content>
    </Container>
  );
};
