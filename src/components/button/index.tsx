import React, { ReactNode } from 'react';
import { Text, ButtonProps as ButtonTypes } from 'react-native';
import { ButtonProps as ButtonPropsRNPaper } from 'react-native-paper';

/** Styles */
import * as S from './styles';
import { theme } from '../../styles/theme';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'terciary';
  children: string;
  onPress?: () => void;
}

const Button = (props: ButtonProps & ButtonPropsRNPaper) => {
  const { type = 'primary', children, ...res } = props;

  const buttonByType = {
    primary: () => (
      <S.Button.Primary {...res} theme={theme}>
        <S.Text.Content type={type}>{children}</S.Text.Content>
      </S.Button.Primary>
    ),
    secondary: () => (
      <S.Button.Secondary {...res} theme={theme}>
        <S.Text.Content type={type}>{children}</S.Text.Content>
      </S.Button.Secondary>
    ),
    terciary: () => (
      <S.Button.Terciary {...res} theme={theme}>
        <S.Text.Content type={type}>{children}</S.Text.Content>
      </S.Button.Terciary>
    ),
  };

  if (type === 'primary') return buttonByType.primary();
  else if (type === 'secondary') return buttonByType.secondary();
  else if (type === 'terciary') return buttonByType.terciary();
  else return buttonByType.primary();
};

export default Button;
