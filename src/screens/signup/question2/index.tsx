import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Header,
  Button,
  Title,
  View,
  FooterText,
  Footer,
  TolltipContainer,
  ScrollView,
} from './styles';
import * as TermActions from '~/store/modules/term/actions';
import { RootState } from '~/store/modules/rootReducer';
import * as SignupActions from '~/store/modules/signup/actions';
import {
  IPerson,
  IUserSignupData,
  IPersonConfig,
} from '~/store/modules/signup/types';

import { applyOptions } from '~/config/signup';

import Checkbox from '~/components/button/checkbox';
import ButtonPrimary from '~/components/button/primary';
import HeaderSteps from '~/components/header/steps';

import ArrowLeftIcon from '~/assets/icons/arrow_left.svg';
import ExclamationIcon from '~/assets/icons/exclamation.svg';
import ButtonImportantInformation from '~/components/button/importantInformation';

interface IParamsNavigation {
  params: {
    indexAnswer: number | undefined;
  };
}

const SignupWelcomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const customer = useSelector((state: RootState) => state.signup.customer);
  const navigation = useNavigation();
  const route = useRoute<IParamsNavigation | any>();
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (typeof route.params.indexAnswer === 'number') {
      setQuestions(applyOptions[route.params.indexAnswer]);
    }
  }, [route]);

  function handleInformationPress() {
    dispatch(TermActions.setOpenSignupImportantInformation({ open: true }));
  }

  function handlePressSelectQuestion(index: number) {
    const exist = selectedQuestions.includes(index);
    if (exist) {
      const removeIndex = selectedQuestions.filter((a) => a !== index);
      setSelectedQuestions(removeIndex);
    } else {
      setSelectedQuestions([...selectedQuestions, index]);
    }
  }

  function handleNoneOptionsPress() {
    if (!selectedQuestions.length) {
      navigation.navigate('signupFeedback');
    }
  }

  function handleContinuePress() {
    const config: IPersonConfig[] = selectedQuestions.map((s) => ({
      text: questions[s],
      selected: true,
    }));
    const newPerson: IPerson = { ...customer.person, config };
    const newCustomer: IUserSignupData = { ...customer, person: newPerson };
    dispatch(SignupActions.setUserSignupData({ ...newCustomer }));
    navigation.navigate('signupForm');
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
          index={2}
          backgroundColor={theme.colors.light_gray}
          color={theme.colors.primary}
          onCancel={() => setOpenCancelModal(true)}
        />
        <Title style={{ marginBottom: 10, paddingHorizontal: 20 }}>
          {t('signup.step2.question')}
        </Title>
      </Header>
      <Container>
        <ScrollView
          contentContainerStyle={{
            minHeight: theme.window.height - headerHeight,
          }}
        >
          <Container style={{ padding: 20 }}>
            {questions.map((answer, index) => (
              <Checkbox
                key={answer}
                marked={selectedQuestions.includes(index)}
                onPress={() => handlePressSelectQuestion(index)}
                title={answer}
              />
            ))}
            <Footer>
              <FooterText
                style={{
                  fontSize: 18,
                  marginVertical: 15,
                  color: selectedQuestions.length
                    ? theme.colors.dark_gray
                    : theme.colors.primary,
                }}
                onPress={handleNoneOptionsPress}
              >
                {t('signup.none_options')}
              </FooterText>
              <ButtonPrimary
                title={t('continue')}
                onPress={handleContinuePress}
                disabled={!selectedQuestions.length}
              />
              <ButtonImportantInformation />
            </Footer>
          </Container>
        </ScrollView>
      </Container>
    </>
  );
};

export default SignupWelcomeScreen;
