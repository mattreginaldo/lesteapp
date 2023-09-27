import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

/** Types */
import { ISignInData } from '~/@types/signin';

/** Components */
import InputCheckbox from '~/components/form/inputCheckbox';
import BackgroundGradient from '~/components/backgroundGradient';
import Button from '~/components/button';

/** Images */
import LesteWhiteLogo from '~/assets/images/logo/lesteLogoWhite.png';

/** Styles */
import * as S from './styles';

const UserSinginSchema = Yup.object().shape({
  email: Yup.string().email('email required').required('field required'),
  password: Yup.string().required('field required'),
  rememberMe: Yup.boolean(),
});

const SignIn = () => {
  const { navigate } = useNavigation();
  const [isVisiblePwd, setIsVisiblePwd] = useState(false);

  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    initialErrors: {
      email: '',
      password: '',
      rememberMe: '',
    },
    validationSchema: UserSinginSchema,
    onSubmit: (values) => {
      requestSignin(values);
    },
  });

  const requestSignin = (values: ISignInData) => {
    console.log('values', values);
  };

  return (
    <S.ContainerScroll>
      <S.Container>
        <BackgroundGradient />

        <Image source={LesteWhiteLogo} style={{ marginTop: 100 }} />

        <S.Form>
          <View style={{ paddingBottom: 15 }}>
            <S.Input
              label="Email"
              setValue={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              autoCapitalize="none"
              errorMessage={formik.errors.email}
            />
          </View>

          <View style={{ paddingBottom: 15 }}>
            <S.Input
              label="Password"
              setValue={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              autoCapitalize="none"
              secureTextEntry={isVisiblePwd}
              right={
                <TextInput.Icon
                  icon={isVisiblePwd ? 'eye' : 'eye-off'}
                  iconColor={theme.colors.white}
                  onPress={() => setIsVisiblePwd(!isVisiblePwd)}
                />
              }
              errorMessage={formik.errors.password}
            />
          </View>

          <S.SigninActions.Row>
            <InputCheckbox
              color="white"
              active={formik.values.rememberMe}
              onPress={() =>
                formik.setFieldValue('rememberMe', !formik.values.rememberMe)
              }
            >
              <S.SigninActions.Text
                adjustsFontSizeToFit
                maxFontSizeMultiplier={1}
                numberOfLines={1}
              >
                Remember Me
              </S.SigninActions.Text>
            </InputCheckbox>
            <TouchableOpacity>
              <S.SigninActions.Text
                adjustsFontSizeToFit
                maxFontSizeMultiplier={1}
                numberOfLines={1}
              >
                Password Recovery
              </S.SigninActions.Text>
            </TouchableOpacity>
          </S.SigninActions.Row>

          <S.SigninActions.Buttons>
            <Button onPress={formik.handleSubmit}>Sign In</Button>

            <Button
              style={{ marginTop: 10 }}
              type="terciary"
              onPress={() => navigate('SignupWelcome')}
            >
              Sign Up
            </Button>
          </S.SigninActions.Buttons>
        </S.Form>
      </S.Container>
    </S.ContainerScroll>
  );
};

export default SignIn;
