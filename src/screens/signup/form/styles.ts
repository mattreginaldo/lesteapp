import styled, { css } from 'styled-components/native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;

type Button = {
  selected?: boolean;
  label?: string;
};

export const ContainerInput = styled.TouchableOpacity<Button>`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  margin-top: 30px;
  /* margin-top:30px;
  padding:10px;
  padding-bottom:10px; */
  border-color: ${({ theme }) => theme.colors.dark_gray};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const TitleButton = styled.Text<Button>`
  font-size: ${({ selected }) => (selected ? 20 : 15)}px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : '#1118'};
  padding-left: 10px;
`;

export const Label = styled(TitleButton)`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.medium_gray};
    font-family: ${theme.font.SweetSans.medium};
  `}
  position: absolute;
  top: -10px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
}))`
  padding: 15px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(13)}px;
    color: ${theme.colors.medium_gray};
    font-family: ${theme.font.SweetSans.regular};
  `}
  margin-top: 10px;
  min-height: 20px;
`;

export const TextErrorInput = styled(Text)`
  margin-top: 0px;
  min-height: 20px;

  font-size: ${({ theme }) => theme.responsive.value(12)}px;
  font-family: ${({ theme }) => theme.font.SweetSans.regular};
  color: ${({ theme }) => theme.colors.alert};
`;

export const ScrollView = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    minHeight: theme.window.height,
    paddingBottom: isIphoneX() ? getStatusBarHeight() + 30 : 30,
  },
}))`
  flex: 1;
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
  background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(30)}px;
    color: ${theme.colors.primary};
    font-family: ${theme.font.SweetSans.medium};
  `}
  max-width: 80%;
`;

export const FooterText = styled(Title)`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.medium_gray};
    font-family: ${theme.font.SweetSans.medium};
    margin-left: ${theme.responsive.value(10)}px;
  `}
  align-self: center;
`;

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.primary};
    font-family: ${theme.font.SweetSans.medium};
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

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
