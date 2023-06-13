import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { ICategory } from '~/@types/category';
import { IFundsData, IFundDocument } from '~/@types/fundsTypes';
import { IUser } from '~/store/modules/auth/types';

export type RootStackParamList = {
  auth: undefined;
  update: undefined;
  signin: undefined;
  welcome: undefined;
  logout: undefined;
  recoveryPassword: undefined;
  codeRecovery: IUser;
  codeRecoveryChangePassword: { id: string; token: string; email: string };
  feedbackRecovery: undefined;
  signupWelcome: undefined;
  signupFeedback: undefined;
  incompatibleClientFeedback: undefined;
  signupQuestion0: undefined;
  signupQuestion1: undefined;
  signupQuestion2: undefined;
  signupForm: undefined;
  signupSchedule: undefined;
  scheduleFeedback: undefined;
  opportunities: undefined;
  opportunitieDetail: undefined;
  previewPdf: {
    title: string;
    url: string;
    watermark?: string;
  };
  opportunitieInterestConfirmation: undefined;
  about: undefined;
  contact: undefined;
  home: undefined;
  profilePorfolio: undefined;
  accountScreen: undefined;
  aboutScreen: undefined;
  setupScreen: undefined;
  subdocumentScreen: {
    userId: string;
  };
  contactScreen: undefined;
  notifications: undefined;
  accountRemovalScreen: undefined;
  contactMessageScreen: undefined;
  helpScreen: undefined;
  walletTutorialScreen: undefined;
  opportunitiesTutorialScreen: undefined;
  fundDetailsTutorialScreen: undefined;
  opportunityDetailsTutorialScreen: undefined;
  messageSentScreen: undefined;
  logoutScreen: undefined;
  fundsDetailsScreen: {
    wholeData: IFundsData;
  };
  filesScreen: {
    files: IFundDocument[];
  };
  fundInterestSent: undefined;
  fundsList: {
    category: ICategory;
  };
  changePasswordScreen: undefined;
  Settings: undefined;
};

export type BottomTabScreenList = {
  Home: undefined;
  MyAccountsContext: undefined;
  Opportunities: undefined;
  Notifications: undefined;
  Settings: undefined;
};

export type BottomTabScreenProp<Screen extends keyof BottomTabScreenList> =
  BottomTabScreenProps<BottomTabScreenList, Screen>;

export type RootStackScreenProp<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type CodeRecoveryRouteScreenProp = RouteProp<
  RootStackParamList,
  'codeRecovery'
>;

export type CodeRecoveryChangePasswordRouteScreenProp = RouteProp<
  RootStackParamList,
  'codeRecoveryChangePassword'
>;

// type CodeRecoveryScreenProp = StackNavigationProp<
//   RootStackParamList,
//   'codeRecovery'
// >;

export type Props = StackScreenProps<RootStackParamList>;
