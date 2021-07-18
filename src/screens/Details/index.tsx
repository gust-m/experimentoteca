import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  Header,
  KitPhoto,
  Div,
  KitName,
  KitIcon,
  Content,
  Ingredients,
  Title,
  Text,
  Step,
  Description,
} from './styles';

type KitDataProps = {
  id: number;
  name: string;
  ingredients: string;
  instructions: string[];
  explanation: string;
  subjects: string[];
  subjectsPT: string[];
};

type kitDataObject = {
  data: KitDataProps;
  kitImg: number;
  kitSubjectIcon: number;
};

export const Details = ({ route }: any) => {
  const { data, kitImg, kitSubjectIcon } = route.params as kitDataObject;
  const { name, explanation, ingredients, instructions } = data;

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <KitPhoto source={kitImg} />
          <Div>
            <KitName>{name}</KitName>
            <KitIcon source={kitSubjectIcon} />
          </Div>
        </Header>

        <Content>
          <Ingredients>
            <Title>Ingredientes:</Title>
            <Text>{ingredients}</Text>
          </Ingredients>
          <Step>
            <Title>Passo a passo:</Title>
            {instructions.map(instruction => (
              <Text key={instruction}>{instruction}</Text>
            ))}
          </Step>
          <Description>
            <Title>O que está acontecendo?</Title>
            <Text>{explanation}</Text>
          </Description>
        </Content>
      </SafeAreaView>
    </Container>
  );
};
