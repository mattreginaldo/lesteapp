import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import BackgroundGradient from '~/components/BackgroundGradient';
import LesteWhiteLogo from '~/assets/images/logo/lesteLogoWhite.png';
import { TextInput } from 'react-native-paper';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

function SignIn() {
  const [text, setText] = useState('');
  const theme = useTheme();
  return (
    <S.ContainerScroll>
      <S.Container>
        <BackgroundGradient />

        <Image source={LesteWhiteLogo} />

        <S.Form>
          <TextInput
            label={<Text style={{ color: theme.colors.white }}>Email</Text>}
            value={text}
            onChangeText={(text) => setText(text)}
            style={{ backgroundColor: 'transparent' }}
            underlineColor={theme.colors.white}
            activeUnderlineColor={theme.colors.white}
          />
          <TextInput
            label={<Text style={{ color: theme.colors.white }}>Password</Text>}
            value={text}
            onChangeText={(text) => setText(text)}
            style={{ backgroundColor: 'transparent' }}
            underlineColor={theme.colors.white}
            activeUnderlineColor={theme.colors.white}
          />
        </S.Form>
      </S.Container>
    </S.ContainerScroll>
  );
}

export default SignIn;
