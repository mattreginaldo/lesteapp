import styled from 'styled-components/native';
import {
  isIphoneX,
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 20 : 20}px;
  padding-bottom: ${getBottomSpace() + 30}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Safe = styled.SafeAreaView``;

export const ButtonArrow = styled.TouchableOpacity``;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 170px;
  align-self: center;
`;

export const ContainerText = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.light_gray};
  font-weight: 500;
`;

export const Paragraph = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.light_gray};
  margin-top: 20px;
`;

export const TolltipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 10px;
`;
