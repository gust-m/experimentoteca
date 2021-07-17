import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  height: ${RFPercentage(10.3)}px;
  width: auto;

  margin-top: 26px;
  flex: 1;
`;

export const PhotoKit = styled.Image`
  width: ${RFPercentage(9.8)}px;
  height: ${RFPercentage(10.3)}px;

  border-radius: 8px;

  margin-right: 14px;
`;

export const Description = styled.View`
  height: ${RFPercentage(10.3)}px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.title700};

  margin-top: 8px;
`;

export const Content = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;

export const SubjectIcon = styled.Image`
  width: ${RFPercentage(2.5)}px;
  height: ${RFPercentage(2.2)}px;

  margin-right: 5px;
`;

export const Subject = styled.Text`
  font-size: ${RFPercentage(1.7)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.text500};
`;

export const BottomLine = styled.Text`
  height: 1px;
  width: 100%;
  background: #1c1c1c;
  margin-top: 14px;
`;
