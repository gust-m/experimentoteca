import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.background, theme.colors.backgroundLinear],
})`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.Image``;

export const Title = styled.Text`
  font-size: ${RFPercentage(6)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.title700};
`;

export const Subtitle = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin: 20px 0 40px 0;
`;

export const Text = styled.Text`
  font-size: ${RFPercentage(2.5)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.text400};
`;

export const LoginButtonContainer = styled.TouchableOpacity`
  width: ${RFPercentage(42)}px;
  height: ${RFPercentage(8.6)}px;

  background: ${theme.colors.buttonBackground};
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled.Image`
  width: ${RFPercentage(3.7)}px;
  height: ${RFPercentage(3.7)}px;
  position: relative;
  margin: 0 0 0 15px;
`;

export const VerticalLine = styled.Text`
  width: 1px;
  height: 100%;
  margin: 0 20px;
  background: ${theme.colors.backgroundLinear};
`;
