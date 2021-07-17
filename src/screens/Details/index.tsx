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

import kitImg from '../../assets/chuvaMacabra.jpg';
import subjectIcon from '../../assets/chemicalIcon.png';

export const Details = () => {
  return (
    <Container>
      <SafeAreaView>
        <Header>
          <KitPhoto source={kitImg} />
          <Div>
            <KitName>Chuva macabra</KitName>
            <KitIcon source={subjectIcon} />
          </Div>
        </Header>

        <Content>
          <Ingredients>
            <Title>Ingredientes:</Title>
            <Text>
              Tigela, óleo de cozinha, corante líquido, pote de vidro e água
            </Text>
          </Ingredients>
          <Step>
            <Title>Passo a passo:</Title>
            <Text>
              1 - Na tigela, insira ¼ de xícara de óleo e 4 colheres (sopa) de
              corante líquido. Misture os ingredientes com uma colher.
            </Text>
            <Text>
              2 - Encha o pote de vidro com água e, em seguida, acrescente a
              mistura de óleo e corante líquido.
            </Text>
            <Text>
              3 - Em um primeiro momento, a mistura flutua. Mas, após alguns
              segundos, ela começa a gotejar. E não acaba por aí: depois de
              alguns minutos, o óleo volta a flutuar e a chuva inverte o seu
              sentido.
            </Text>
          </Step>
          <Description>
            <Title>O que está acontecendo?</Title>
            <Text>
              Você está brincando com a densidade dos líquidos. A mistura de
              corante com óleo é mais densa do que a água e, por isso, goteja
              para o fundo do pote. Mas em pouco tempo o corante começa a se
              misturar com a água, perdendo o contato com o óleo. Com isso, o
              óleo fica menos denso do que a água e flutua mais uma vez,
              voltando à superfície do pote.
            </Text>
          </Description>
        </Content>
      </SafeAreaView>
    </Container>
  );
};
