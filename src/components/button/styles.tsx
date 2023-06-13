import styled, { css } from 'styled-components/native';
import {
  Button as ButtonRNPaper,
  ButtonProps as ButtonPropsRNPaper,
} from 'react-native-paper';
import { ButtonProps } from '.';
import { theme } from '~/styles/theme';

// BUTTONS

const Primary = styled(ButtonRNPaper).attrs<ButtonProps & ButtonPropsRNPaper>({
  mode: 'contained',
  textColor: theme.colors.primary,
  buttonColor: theme.colors.white,
})`
  ${({ theme }) => css`
    border-radius: ${theme.responsive.value(8)}px;
  `}
`;

const Secondary = styled(ButtonRNPaper).attrs<ButtonProps & ButtonPropsRNPaper>(
  {
    mode: 'contained',
    textColor: theme.colors.primary,
    buttonColor: theme.colors.white,
  }
)`
  ${({ theme }) => css`
    //Custom styles
  `}
`;

const Terciary = styled(ButtonRNPaper).attrs<ButtonProps & ButtonPropsRNPaper>({
  mode: 'text',
  textColor: theme.colors.white,
})`
  ${({ theme }) => css`
    //Custom styles
    border-radius: ${theme.responsive.value(8)}px;
  `}
`;

const Button = {
  Primary,
  Secondary,
  Terciary,
};

// BUTTONS

const Content = styled.Text<{ type: 'primary' | 'secondary' | 'terciary' }>`
  ${({ theme, type }) => css`
    font-family: ${theme.font.SweetSans.medium};
    font-size: ${theme.responsive.value(16)}px;
    color: ${type === 'terciary' ? theme.colors.white : theme.colors.primary};
  `}
`;

const Text = {
  Content,
};

export { Button, Text };
