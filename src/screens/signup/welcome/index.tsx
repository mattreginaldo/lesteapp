import React from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Container, ContainerText, Title, Paragraph } from './styles';

// import LighButton from '~/components/button/light';
// import HeaderBack from '~/components/header/back';
// import ButtonImportantInformation from '~/components/button/importantInformation';
import BackgroundGradient from '~/components/backgroundGradient';
// import BackgroundImage from '~/components/backgroundImage';

const SignUpWelcome = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation();

  function handleContinuePress() {
    // navigation.navigate('signupQuestion0');
  }

  return (
    <View
      testID="signup-first-screen"
      style={{ flex: 1, backgroundColor: 'black' }}
    >
      {/* <HeaderBack
        color={theme.colors.light_gray}
        backgroundColor="transparent"
      /> */}
      <BackgroundGradient />
      <Container>
        <ContainerText>
          <Title>{t('signup.welcome.page1.title')}</Title>
          <Paragraph>{t('signup.welcome.page1.p1')}</Paragraph>
          <Paragraph>{t('signup.welcome.page1.p2')}</Paragraph>
        </ContainerText>
        {/* <LighButton
          testID="signup-continue"
          title={t('continue')}
          onPress={handleContinuePress}
        />
        <ButtonImportantInformation light /> */}
      </Container>
    </View>
  );
};

export default SignUpWelcome;
