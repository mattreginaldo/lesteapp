import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import {
  Container,
  Safe,
  ContainerText,
  Title,
  Paragraph,
  Image,
  ButtonArrow,
} from './styles';

import ArrowLeftIcon from '~/assets/icons/arrow_left.svg';
import LighButton from '~/components/button/light';
import BackgroundImage from '~/components/backgroundImage';
import LesteWhiteLogo from '~/assets/image/lesteLogoWhite.png';

const IncompatibleClientFeedback: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBackPress() {
    navigation.goBack();
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
        <Title>Oops.</Title>
        <Paragraph>
          We would love to have you as a client, but unfortunately we are only
          allowed to have clients who are accredited investors. Did you click in
          here by mistake? Just go back and continue the registration process
        </Paragraph>
      </ContainerText>
      <LighButton title="Go back" onPress={handleBackPress} />
      <Safe />
    </Container>
  );
};

export default IncompatibleClientFeedback;
