import styled, { css } from 'styled-components/native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: ${isIphoneX() ? getStatusBarHeight() + 30 : 30}px;
  min-height: ${({ theme }) =>
    isIphoneX()
      ? theme.window.height - getStatusBarHeight() - 100
      : theme.window.height - 100}px;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const View = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
font-size: ${theme.responsive.value(30)}px;
color: ${theme.colors.primary}
font-family: ${theme.font.SweetSans.regular};
`}
`;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
font-size: ${theme.responsive.value(15)}px;
color: ${theme.colors.primary}
font-family: ${theme.font.SweetSans.regular};
  margin-top: ${theme.responsive.value(20)}px;
`}
`;
