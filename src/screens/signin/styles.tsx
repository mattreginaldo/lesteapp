import styled, { useTheme, css } from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { Text, View } from 'react-native';
import AlertIcon from '~/assets/images/icons/alert.svg';

const ContainerScroll = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    minHeight: props.theme.window.height,
  },
}))``;

const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    padding-bottom: 50px;
  `}
`;

const SigninActionsRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SigninActionsButtons = styled.View`
  padding-top: 150px;
`;

const InputTextStyle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.SweetSans.regular};
    font-size: ${theme.responsive.value(16)}px;
    color: ${theme.colors.white};
  `}
`;

const SigninActionsText = styled(InputTextStyle)`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(14)}px;
    margin-top: 1px;
  `}
`;

const TextErrorInput = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.SweetSans.regular};
  `}
  color: ${({ theme }) => theme.colors.alert};
`;

interface InputProps {
  label: string;
  value?: string;
  error?: string;
  setValue: (text: string) => void;
}

const Input = ({
  label,
  value,
  setValue,
  error,
  ...res
}: InputProps & TextInputProps) => {
  const theme = useTheme();

  return (
    <>
      <TextInput
        label={<InputTextStyle>{label}</InputTextStyle>}
        value={value}
        onChangeText={setValue}
        error={!!error}
        style={{ height: 80, backgroundColor: 'transparent' }}
        underlineColor={theme.colors.white}
        activeUnderlineColor={theme.colors.white}
        textColor={theme.colors.white}
        underlineStyle={{ marginBottom: 15 }}
        contentStyle={{
          height: 80,
          paddingTop: 20,
          fontFamily: theme.font.SweetSans.regular,
        }}
        {...res}
      />

      {error ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 0,
          }}
        >
          <AlertIcon marginRight={5} width={15} height={15} marginTop={0} />
          <TextErrorInput>{error}</TextErrorInput>
        </View>
      ) : (
        <TextErrorInput />
      )}
    </>
  );
};

const SigninActions = {
  Row: SigninActionsRow,
  Buttons: SigninActionsButtons,
  Text: SigninActionsText,
};

export { ContainerScroll, Container, Form, SigninActions, Input };
