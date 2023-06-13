import styled, { css } from 'styled-components/native';

import CheckIcon from '~/assets/images/icons/checkIcon.svg';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

type IRadio = {
  active?: boolean;
  color?: string;
};

export const Title = styled.Text<IRadio>`
  ${({ theme, color }) => css`
    font-size: ${theme.responsive.value(16)}px;
    font-family: ${theme.font.SweetSans.regular};
    color: ${color || theme.colors.light_gray};
  `}
`;

export const RadioContent = styled(CheckIcon) <IRadio>`
  flex: ${(props: any) => (props.active ? 1 : 0)};
  width:  ${({ theme }) => theme.responsive.value(15)}px;
  height:  ${({ theme }) => theme.responsive.value(15)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Radio = styled.View<IRadio>`
  width: ${({ theme }) => theme.responsive.value(16)}px;
  height: ${({ theme }) => theme.responsive.value(16)}px;
  align-items: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.white : 'transparent'};
  border-radius: 5px;
  margin-right: 10px;
  border: solid 1.5px ${({ theme, color }) => color || theme.colors.light_gray};
`;
