import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Container,
  KitList,
  Header,
  PhotoImage,
  Description,
  TitleContainer,
  Title,
  Name,
  Subtitle,
  Filter,
  FilterContainer,
  FilterContent,
  FilterIcon,
  FilterInput,
  IconInput,
  Div,
  Text,
  NumberOfKits,
  BottomLine,
} from './styles';

import photoImg from '../../assets/photo.png';
import filter from '../../assets/filter.png';
import upArrow from '../../assets/upArrow.png';

import { Kit } from '../../components/Kit';

export const Main = () => {
  return (
    <Container>
      <SafeAreaView>
        <Header>
          <PhotoImage source={photoImg} />
          <Description>
            <TitleContainer>
              <Title>Olá, </Title>
              <Name>Gustavo</Name>
            </TitleContainer>
            <Subtitle>Hoje é dia de aprender!</Subtitle>
          </Description>
        </Header>

        <Filter>
          <FilterContainer>
            <FilterContent>
              <FilterIcon source={filter} />
              <FilterInput placeholder="Filtrar por matéria" />
            </FilterContent>
            <IconInput source={upArrow} />
          </FilterContainer>
          <BottomLine />
        </Filter>

        <Div>
          <Text>Kits Disponíveis</Text>
          <NumberOfKits>Total 5</NumberOfKits>
        </Div>

        <KitList showsVerticalScrollIndicator={false}>
          <Kit />
          <Kit />
          <Kit />
          <Kit />
          <Kit />
          <Kit />
          <Kit />
          <Kit />
          <Kit />
          <Kit />
        </KitList>
      </SafeAreaView>
    </Container>
  );
};
