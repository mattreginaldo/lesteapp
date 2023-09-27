import styled, { css } from 'styled-components/native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

/**
 * -60 é o tamanho padráo do height
 */
export const ScrollView = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    minHeight: isIphoneX()
      ? theme.window.height - getStatusBarHeight() - 60
      : theme.window.height - 60,
  },
}))``;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 20 : 20}px;
  padding-bottom: ${isIphoneX() ? getStatusBarHeight() + 30 : 30}px;
`;

export const Button = styled.TouchableOpacity.attrs({})`
  padding: 10px;
  margin-bottom: 50px;
`;

export const ContainerText = styled.View`
  flex: 1;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(30)}px;
    font-family: ${theme.font.SweetSans.regular};
    color: ${theme.colors.light_gray};
  `}
`;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.responsive.value(20)}px;
    font-size: ${theme.responsive.value(15)}px;
    font-family: ${theme.font.SweetSans.regular};
    color: ${theme.colors.light_gray};
  `}
`;

export const TolltipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 10px;
`;
