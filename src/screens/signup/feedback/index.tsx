import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { useDispatch } from 'react-redux';
import {
  Container,
  Safe,
  ContainerText,
  Title,
  Paragraph,
  Image,
  ButtonArrow,
} from './styles';
import * as SignupActions from '~/store/modules/signup/actions';

import ArrowLeftIcon from '~/assets/icons/arrow_left.svg';
import LighButton from '~/components/button/light';
import BackgroundImage from '~/components/backgroundImage';
import LesteWhiteLogo from '~/assets/image/lesteLogoWhite.png';

const SignupWelcomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleInformationPress() {
    dispatch(SignupActions.setOpenModalInformation({ open: true }));
  }

  function handleBackPress() {
    navigation.goBack();
  }

  function handleButtonPress() {
    navigation.navigate('signin');
  }

  return (
    <Container>
      <BackgroundImage />
      <ButtonArrow onPress={handleBackPress}>
        <ArrowLeftIcon
          stroke={theme.colors.light_gray}
          style={{ height: 50, width: 50 }}
        />
      </ButtonArrow>
      <Image source={LesteWhiteLogo} />
      <ContainerText>
        <Title>{t('signup.finish.title')}</Title>
        <Paragraph>{t('signup.finish.p2')}</Paragraph>
      </ContainerText>
      <LighButton title={t('back_to_login')} onPress={handleButtonPress} />
      <Safe />
    </Container>
  );
};

export default SignupWelcomeScreen;
