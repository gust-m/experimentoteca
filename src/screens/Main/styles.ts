import styled from 'styled-components/native';

import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.background, theme.colors.backgroundLinear],
})`
  flex: 1;
  padding: 0 20px 60px 20px;
`;

export const KitContainer = styled.View`
  height: 100%;
  flex: 1;
`;

export const KitList = styled.ScrollView`
  width: ${RFPercentage(48.5)}px;
  height: 75%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${RFPercentage(7.5)}px;

  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 20}px;
`;

export const PhotoImage = styled.Image`
  width: ${RFPercentage(7.5)}px;
  height: ${RFPercentage(7.5)}px;
  border-radius: 99999px;
`;

export const Description = styled.View`
  margin-left: 20px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(3.7)}px;
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.text};
`;

export const Name = styled.Text`
  font-size: ${RFPercentage(3.7)}px;
  font-family: ${theme.fonts.title700};
  color: #daa520;
`;

export const Subtitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${theme.fonts.text400};
  color: #abb1cc;
`;

export const Filter = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 36px;

  width: ${RFPercentage(48.4)}px;
  height: ${RFPercentage(6.1)}px;
`;

export const FilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilterIcon = styled.Image`
  width: ${RFPercentage(3.7)}px;
  height: ${RFPercentage(3.7)}px;

  margin-right: 22px;
  margin-left: 8px;
`;

export const FilterInput = styled.TextInput.attrs({
  placeholderTextColor: '#D4C2FF',
})`
  font-size: ${RFPercentage(2.5)}px;
  color: #d4c2ff;
`;

export const IconInput = styled.Image`
  width: ${RFPercentage(2)}px;
  height: ${RFPercentage(1)}px;

  margin-right: 3px;
`;

export const BottomLine = styled.Text`
  height: 1px;
  width: 100%;

  margin-top: 14px;
  background: #1c1c1c;
`;

export const Div = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${RFPercentage(52.5)}px;

  margin-top: 26px;
`;

export const Text = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.text};
`;

export const NumberOfKits = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${theme.fonts.text400};
  color: #abb1cc;
`;
