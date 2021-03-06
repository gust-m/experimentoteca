import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import {
  Container,
  KitContainer,
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

import photoImg from '../../assets/profile.png';
import filter from '../../assets/filter.png';
import upArrow from '../../assets/upArrow.png';

import chuvaImg from '../../assets/chuvaMacabra.jpg';
import areiaMovedicaImg from '../../assets/areiaMovedica.jpg';
import coresDesaparecemImg from '../../assets/coresDesaparecem.png';
import feijaoImg from '../../assets/feijao.jpg';
import encherBalaoImg from '../../assets/encherBalao.png';
import chemicalIcon from '../../assets/chemicalIcon.png';
import physicsIcon from '../../assets/physicsIcon.png';
import biologyIcon from '../../assets/biologyIcon.png';

import { Kit } from '../../components/Kit';

import { kits } from '../../utils/kits';

export const Main = () => {
  const [availableKits, setAvailableKits] = useState(kits);
  const [kitsLength, setKitsLength] = useState(kits.length);

  const icons = [
    chuvaImg,
    coresDesaparecemImg,
    feijaoImg,
    encherBalaoImg,
    areiaMovedicaImg,
  ];

  const findIconAndImgSubject = (subject: string[], id: number) => {
    let subjectIcon;
    const kitImg = icons[id - 1];

    if (subject.includes('biology')) {
      subjectIcon = biologyIcon;
    } else if (subject.includes('physics')) {
      subjectIcon = physicsIcon;
    } else {
      subjectIcon = chemicalIcon;
    }

    return { subjectIcon, kitImg };
  };

  const filterBySubject = (word: string) => {
    if (word === '') {
      setAvailableKits(kits);
    }
    const filteredKits = kits.filter(kit => {
      const formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return (
        kit.subjectsPT[0].includes(formattedWord) ||
        kit.subjectsPT[1]?.includes(formattedWord)
      );
    });
    setAvailableKits(filteredKits);
    setKitsLength(filteredKits.length);
  };

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <PhotoImage source={photoImg} />
          <Description>
            <TitleContainer>
              <Title>Ol??, </Title>
              <Name>Visitante</Name>
            </TitleContainer>
            <Subtitle>Hoje ?? dia de aprender!</Subtitle>
          </Description>
        </Header>

        <Filter>
          <FilterContainer>
            <FilterContent>
              <FilterIcon source={filter} />
              <FilterInput
                placeholder="Filtrar por mat??ria"
                onChangeText={text => filterBySubject(text)}
              />
            </FilterContent>
            <IconInput source={upArrow} />
          </FilterContainer>
          <BottomLine />
        </Filter>

        <Div>
          <Text>Kits Dispon??veis</Text>
          <NumberOfKits>Total {kitsLength}</NumberOfKits>
        </Div>

        <KitList showsVerticalScrollIndicator={false}>
          <KitContainer>
            {availableKits.map(kit => {
              const { kitImg, subjectIcon } = findIconAndImgSubject(
                kit.subjects,
                kit.id,
              );
              return (
                <Kit
                  kitData={kit}
                  key={kit.id}
                  kitImg={kitImg}
                  kitSubjectIcon={subjectIcon}
                />
              );
            })}
          </KitContainer>
        </KitList>
      </SafeAreaView>
    </Container>
  );
};
