import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
  kitData: KitDataProps;
  kitImg: number;
  kitSubjectIcon: number;
};

export const Kit = ({ kitData, kitImg, kitSubjectIcon }: kitDataObject) => {
  const navigation = useNavigation();
  const handleSelectKit = () => {
    navigation.navigate('Details', { data: kitData, kitImg, kitSubjectIcon });
  };

  const { name, subjectsPT } = kitData;

  return (
    <Container onPress={handleSelectKit} activeOpacity={0.7}>
      <PhotoKit source={kitImg} />

      <Description>
        <Title>{name}</Title>
        <Content>
          <SubjectIcon source={kitSubjectIcon} />
          <Subject>{subjectsPT}</Subject>
        </Content>
        <BottomLine />
      </Description>
    </Container>
  );
};
