import React, { useState } from 'react';
import { Container, ContainerText, Title, View } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store/modules/rootReducer';
import * as SignupActions from '~/store/modules/signup/actions';
import * as TermActions from '~/store/modules/term/actions';
import { IPerson, IUserSignupData } from '~/store/modules/signup/types';

import { howDoYouRank } from '~/config/signup';

import AnswerButton from '~/components/button/answer';
import HeaderSteps from '~/components/header/steps';

import ButtonImportantInformation from '~/components/button/importantInformation';

const SignupQuestion1Component: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const customer = useSelector((state: RootState) => state.signup.customer);
  const navigation = useNavigation();
  const [openCancelModal, setOpenCancelModal] = useState(false);

  function handleAnswerPress(index: number) {
    const nextStep = !index ? 'signupQuestion1' : 'signupForm';
    const newPerson: IPerson = {
      type: null,
      config: null,
      classification: index,
    };
    const newCustomer: IUserSignupData = { ...customer, person: newPerson };
    dispatch(SignupActions.setUserSignupData({ ...newCustomer }));
    navigation.navigate(nextStep);
  }

  function handleBackPress() {
    navigation.goBack();
  }

  function handleModalTrueCancelPress() {
    setOpenCancelModal(false);
    navigation.navigate('signin');
  }

  return (
    <>
      <HeaderSteps
        quantity={5}
        index={0}
        backgroundColor={theme.colors.light_gray}
        color={theme.colors.primary}
      />
      <Container>
        <Title style={{ marginBottom: 40 }}>{t('signup.step0.question')}</Title>
        <ContainerText>
          <View>
            {howDoYouRank.map((n, i) => (
              <AnswerButton
                key={n}
                onPress={() => handleAnswerPress(i)}
                title={t(`signup.step0.${i}`)}
              />
            ))}
          </View>
        </ContainerText>
        <ButtonImportantInformation />
      </Container>
    </>
  );
};

export default SignupQuestion1Component;
