import styled, { css } from 'styled-components/native';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px 0 20px;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const TooltipOption = styled.View`
  flex-direction: row;
  align-items: center;
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

export const FooterText = styled(Title)`
  ${({ theme }) => css`
font-size: ${theme.responsive.value(15)}px;
color: ${theme.colors.black}
font-family: ${theme.font.SweetSans.regular};
  margin-left: ${theme.responsive.value(10)}px;
`}
  align-self: center;
`;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
font-size: ${theme.responsive.value(15)}px;
color: ${theme.colors.primary}
font-family: ${theme.font.SweetSans.regular};
  margin-top: ${theme.responsive.value(20)}px;
`}
`;

export const TolltipContainer = styled.View`
  padding-bottom: ${isIphoneX() ? getStatusBarHeight() + 30 : 30}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;
