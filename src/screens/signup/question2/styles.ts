import styled, { css } from 'styled-components/native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { FlatList as FlatListNative } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;

/**
 * -60 é o tamanho padráo do height
 */
export const ScrollView = styled.ScrollView`
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

export const Footer = styled.View`
  padding-top: 20px;
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.light_gray};
  padding-bottom: ${isIphoneX() ? getStatusBarHeight() + 20 : 20}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
font-size: ${theme.responsive.value(30)}px;
color: ${theme.colors.primary}
font-family: ${theme.font.SweetSans.regular};
`}
`;

export const FooterText = styled(Title)`
  ${({ theme }) => css`
font-size: ${theme.responsive.value(20)}px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 10px;
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
