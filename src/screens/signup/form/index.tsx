import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useTranslation, getI18n } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Container,
  Header,
  Button,
  ContainerText,
  Title,
  Loading,
  Text,
  TextErrorInput,
  FooterText,
  TolltipContainer,
  ScrollView,
  Footer,
  ContainerInput,
  TitleButton,
  Label,
} from './styles';
import { RootState } from '~/store/modules/rootReducer';
import * as SignupActions from '~/store/modules/signup/actions';
import * as TermActions from '~/store/modules/term/actions';
import ArrowIconDown from '~/assets/icons/angle_down.svg';
import 'yup-phone';

import { applyOptions } from '~/config/signup';

import Checkbox from '~/components/button/checkbox';
import ButtonPrimary from '~/components/button/primary';
import StepComponent from '~/components/steps';
import HeaderSteps from '~/components/header/steps';
import ModalCountries from '~/components/modal/countries';
import ButtonImportantInformation from '~/components/button/importantInformation';

import ModalTrueOrFalseQuestion from '~/components/modal/trueOrFalseQuestion';
import InputHighlight from '~/components/input/inputHightlight';
import InputRadio from '~/components/input/inputRadio';

import countriesPrefixPhone from '~/config/contriesPrefixPhone';

const radioOptions = [
  {
    name: 'yes',
    value: true,
  },
  {
    name: 'no',
    value: false,
  },
];

interface IUserSchema {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  phone: string;
  investmentVehicle: string;
  relationship: string;
}

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{1,3}\)?)\s?-?\s?(\(?\d{1,4}\)?)\s?-?\s?(\(?\d{1,4}\)?)\s?-?\s?(\(?\d{0,4}\)?)?$/;

const UserSchema = Yup.object().shape({
  firstname: Yup.string().required('validation.required'),
  lastname: Yup.string().required('validation.required'),
  email: Yup.string().email('validation.email').required('validation.required'),
  country: Yup.string().required('validation.required'),
  phone: Yup.string()
    .required('validation.required')
    .min(8, getI18n().t('validation.min', { min: 8 }))
    .test('valid_phone_number', 'validation.phone', (value) => {
      const regex = new RegExp(phoneRegExp);
      return regex.test(value);
    }),
  investmentVehicle: Yup.string()
    .max(50, 'Text is too long')
    .required('validation.required'),
  relationship: Yup.string(),
});

const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const InputRefs = React.useRef<any>({});
  const dispatch = useDispatch();
  const { customer, loading } = useSelector((state: RootState) => state.signup);

  const [openModalCountry, setOpenModalCountry] = useState<boolean>(false);
  const [radioItem, setRadioItem] = useState(radioOptions[1]);
  const [emailEditable, setEditableEmail] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      country: '',
      phone: '',
      investmentVehicle: '',
      relationship: '',
    },
    validationSchema: UserSchema,
    onSubmit: (values: IUserSchema): void => {
      if (radioItem.value) {
        if (!values.relationship) {
          return formik.setFieldError('relationship', 'validation.required');
        }
      }
      const name = `${values.firstname} ${values.lastname}`;

      dispatch(
        SignupActions.requestSignup({ ...customer, ...values, name }, () =>
          setEditableEmail(false)
        )
      );
    },
  });

  useEffect(() => {
    if (!formik.values.country) {
      if (customer?.person?.classification === 1) {
        formik.setFieldValue('country', 'Brazil');
      }
      if (customer?.person?.classification === 0) {
        formik.setFieldValue('country', 'United States of America');
      }
    }
  }, [customer]);

  const onSelectCountry = React.useCallback(
    (countryName) => {
      if (countryName) {
        formik.setFieldValue('country', countryName);
      }
      setOpenModalCountry(false);
    },
    [formik]
  );

  return (
    <>
      <ModalCountries
        open={openModalCountry}
        onSelect={onSelectCountry}
        selected={formik.values.country}
      />
      <HeaderSteps
        quantity={5}
        index={3}
        backgroundColor={theme.colors.light_gray}
        color={theme.colors.primary}
      />
      <Container>
        <Title style={{ marginVertical: 0 }}>{t('signup.form.title')}</Title>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
          <ScrollView showsVerticalScrollIndicator={false}>
            <ContainerText>
              <>
                <InputHighlight
                  style={{ color: theme.colors.primary }}
                  placeholder="First Name"
                  onChangeText={formik.handleChange('firstname')}
                  onBlur={formik.handleBlur('firstname')}
                  value={formik.values.firstname}
                  onSubmitEditing={() => {
                    if (InputRefs.current.lastname) {
                      InputRefs.current.lastname.focus();
                    }
                  }}
                  returnKeyType="next"
                />
                {formik.touched.firstname && formik.errors?.firstname ? (
                  <TextErrorInput>{t(formik.errors?.firstname)}</TextErrorInput>
                ) : (
                  <TextErrorInput />
                )}
                <InputHighlight
                  ref={(el: any) => {
                    InputRefs.current.lastname = el;
                  }}
                  onSubmitEditing={() => {
                    if (InputRefs.current.email) {
                      InputRefs.current.email.focus();
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  placeholder="Last Name"
                  onChangeText={formik.handleChange('lastname')}
                  onBlur={formik.handleBlur('lastname')}
                  value={formik.values.lastname}
                />
                {formik.touched.lastname && formik.errors?.lastname ? (
                  <TextErrorInput>{t(formik.errors?.lastname)}</TextErrorInput>
                ) : (
                  <TextErrorInput />
                )}
                <InputHighlight
                  ref={(el: any) => {
                    InputRefs.current.email = el;
                  }}
                  onSubmitEditing={() => {
                    if (formik.values.country && InputRefs.current.phone) {
                      InputRefs.current.phone.focus();
                    } else {
                      setOpenModalCountry(true);
                    }
                  }}
                  style={{
                    color: emailEditable
                      ? theme.colors.primary
                      : theme.colors.medium_gray,
                  }}
                  placeholder="Email"
                  editable={emailEditable}
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors?.email ? (
                  <TextErrorInput>{t(formik.errors?.email)}</TextErrorInput>
                ) : (
                  <TextErrorInput />
                )}
                <ContainerInput
                  activeOpacity={1}
                  selected={!!formik.values.country}
                  onPress={() => setOpenModalCountry(true)}
                >
                  {!!formik.values.country && (
                    <Label selected={!!formik.values.country}>
                      {t('country')}
                    </Label>
                  )}
                  <TitleButton selected={!!formik.values.country}>
                    {formik.values.country || t('select_country')}
                  </TitleButton>
                  <Button style={{ height: formik.values.country ? 20 : 15 }}>
                    <ArrowIconDown stroke={theme.colors.dark_gray} />
                  </Button>
                </ContainerInput>
                {formik.touched.country && formik.errors?.country ? (
                  <TextErrorInput style={{ marginTop: 3 }}>
                    {t(formik.errors?.country)}
                  </TextErrorInput>
                ) : (
                  <TextErrorInput style={{ marginTop: 3 }} />
                )}
                <InputHighlight
                  ref={(el: any) => {
                    InputRefs.current.phone = el;
                  }}
                  style={{ color: theme.colors.primary }}
                  placeholder="Phone"
                  onChangeText={formik.handleChange('phone')}
                  onBlur={formik.handleBlur('phone')}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors?.phone ? (
                  <TextErrorInput>{t(formik.errors?.phone)}</TextErrorInput>
                ) : (
                  <TextErrorInput />
                )}
                <InputHighlight
                  ref={(el: any) => {
                    InputRefs.current.investmentVehicle = el;
                  }}
                  style={{ color: theme.colors.primary }}
                  placeholder="Investment Vehicle"
                  onChangeText={formik.handleChange('investmentVehicle')}
                  onBlur={formik.handleBlur('investmentVehicle')}
                  value={formik.values.investmentVehicle}
                />
                {formik.touched.investmentVehicle &&
                formik.errors?.investmentVehicle ? (
                  <TextErrorInput>
                    {t(formik.errors?.investmentVehicle)}
                  </TextErrorInput>
                ) : (
                  <TextErrorInput />
                )}
                <InputRadio
                  title={t('signup.form.previous_relationship')}
                  options={radioOptions}
                  onSelect={(item: any) => {
                    if (!item.value) {
                      formik.setFieldValue('relationship', '');
                    }
                    setRadioItem(item);
                  }}
                  selected={radioItem}
                />
                {radioItem?.value && (
                  <>
                    <Text
                      style={{
                        marginBottom: -25,
                        backgroundColor: theme.colors.light_gray,
                        zIndex: 100,
                      }}
                    >
                      {t('signup.form.provide_contact')}
                    </Text>
                    <InputHighlight
                      style={{ color: theme.colors.primary }}
                      placeholder="Relationship"
                      onChangeText={formik.handleChange('relationship')}
                      onBlur={formik.handleBlur('relationship')}
                      value={formik.values.relationship}
                    />
                    {formik.touched.relationship &&
                    formik.errors?.relationship ? (
                      <TextErrorInput style={{ marginBottom: 30 }}>
                        {t(formik.errors?.relationship)}
                      </TextErrorInput>
                    ) : (
                      <TextErrorInput style={{ marginBottom: 30 }} />
                    )}
                    <Text
                      style={{ fontSize: 13, marginTop: -20, marginBottom: 20 }}
                    >
                      {t('signup.form.indicate')}
                    </Text>
                  </>
                )}
              </>
              <Footer>
                {loading ? (
                  <Loading />
                ) : (
                  <ButtonPrimary
                    title={t('continue')}
                    onPress={formik.handleSubmit}
                    disabled={false}
                  />
                )}
                <ButtonImportantInformation />
              </Footer>
            </ContainerText>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};

export default SignupForm;
