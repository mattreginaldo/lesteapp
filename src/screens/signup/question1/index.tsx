import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Header,
  ContainerText,
  Title,
  View,
  TolltipContainer,
  TooltipOption,
} from './styles';
import { RootState } from '~/store/modules/rootReducer';
import * as SignupActions from '~/store/modules/signup/actions';
import * as TermActions from '~/store/modules/term/actions';
import { IPerson, IUserSignupData } from '~/store/modules/signup/types';

import { investorTypes } from '~/config/signup';

import AnswerButton from '~/components/button/answer';
import HeaderSteps from '~/components/header/steps';

import TolltopIcon from '~/assets/icons/tooltip.svg';
import ButtonImportantInformation from '~/components/button/importantInformation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupQuestion1Component: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const customer = useSelector((state: RootState) => state.signup.customer);
  const navigation = useNavigation();
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  function handleInformationPress() {
    dispatch(TermActions.setOpenSignupImportantInformation({ open: true }));
  }

  function handlePressTolltip() {
    dispatch(TermActions.setOpenTolltip({ open: true }));
  }

  function handleAnswerPress(index: number) {
    const newPerson: IPerson = { ...customer.person, type: index };
    const newCustomer: IUserSignupData = { ...customer, person: newPerson };
    dispatch(SignupActions.setUserSignupData({ ...newCustomer }));
    navigation.navigate('signupQuestion2', { indexAnswer: index });
  }

  function handleNotAccreditedPress() {
    navigation.navigate('incompatibleClientFeedback');
  }

  return (
    <>
      <Header
        onLayout={(e) => {
          if (e.nativeEvent?.layout?.height) {
            setHeaderHeight(e.nativeEvent.layout.height);
          }
        }}
      >
        <HeaderSteps
          quantity={5}
          index={1}
          backgroundColor={theme.colors.light_gray}
          color={theme.colors.primary}
          onCancel={() => setOpenCancelModal(true)}
        />
        <Title style={{ marginBottom: 10, paddingHorizontal: 20 }}>
          {t('signup.step1.question')}
        </Title>
      </Header>
      <Container>
        <ScrollView
          contentContainerStyle={{
            minHeight: theme.window.height - headerHeight,
          }}
        >
          <ContainerText>
            <View>
              <>
                {investorTypes.map((answer, index) => (
                  <AnswerButton
                    key={answer}
                    onPress={() => handleAnswerPress(index)}
                    title={answer}
                  />
                ))}
                <TooltipOption>
                  <TouchableOpacity onPress={handlePressTolltip}>
                    <TolltopIcon
                      fill={theme.colors.primary}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                  <ContainerText>
                    <AnswerButton
                      onPress={handleNotAccreditedPress}
                      title={t('signup.step1.4')}
                    />
                  </ContainerText>
                </TooltipOption>
              </>
            </View>
          </ContainerText>
          <TolltipContainer>
            <ButtonImportantInformation />
          </TolltipContainer>
        </ScrollView>
      </Container>
    </>
  );
};

export default SignupQuestion1Component;
