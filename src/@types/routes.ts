import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Signin: undefined;
  SignupWelcome: undefined;
};

export type BottomTabScreenList = {
  Home: undefined;
  MyAccountsContext: undefined;
  Opportunities: undefined;
  Notifications: undefined;
  Settings: undefined;
};

export type RootStackScreenProp<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type Props = StackScreenProps<RootStackParamList>;
