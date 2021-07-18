import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.background, theme.colors.backgroundLinear],
})`
  flex: 1;
  padding: 50px 20px 0 30px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;

  height: ${RFPercentage(16)}px;
`;

export const KitPhoto = styled.Image`
  width: ${RFPercentage(17.7)}px;
  height: ${RFPercentage(16.4)}px;

  border-radius: 8px;
`;

export const Div = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 35px;
  margin-top: 30px;

  width: ${RFPercentage(26.7)}px;
`;

export const KitName = styled.Text`
  font-size: ${RFPercentage(4)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.title700};

  display: flex;
  text-align: center;
`;

export const KitIcon = styled.Image`
  width: ${RFPercentage(9.8)}px;
  height: ${RFPercentage(10.1)}px;

  margin-top: 20px;
`;

export const Content = styled.View`
  height: 100%;
`;

export const Ingredients = styled.View`
  margin-top: 20px;
`;

export const Step = styled.View`
  margin-top: 20px;
`;

export const Description = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(3.4)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.text700};
`;

export const Text = styled.Text`
  font-size: ${RFPercentage(1.7)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.text500};
  width: ${RFPercentage(50)}px;

  margin-top: 5px;
`;
