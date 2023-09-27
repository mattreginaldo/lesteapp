import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform } from 'react-native';

import SignIn from '~/screens/signin';
import SignUpWelcome from '~/screens/signup/welcome';
import { RootStackParamList } from '~/@types/routes';

const Stack = createStackNavigator<RootStackParamList>();

// const MyAccountsContextNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         cardStyle: {
//           backgroundColor: 'transparent',
//         },
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen
//         options={{
//           animationEnabled: false,
//         }}
//         name="MyAccounts"
//         component={Profiles}
//       />
//       <Stack.Screen
//         options={{
//           animationEnabled: false,
//         }}
//         name="profilePorfolio"
//         component={ProfilePorfolio}
//       />
//     </Stack.Navigator>
//   );
// };

// export { MyAccountsContextNavigator };

export default function AuthenticationRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="update" component={Update} /> */}
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="SignupWelcome" component={SignUpWelcome} />
      {/* <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="logout" component={Logout} />
      <Stack.Screen name="recoveryPassword" component={RecoveryPassword} />
      <Stack.Screen name="codeRecovery" component={CodeRecovery} />
      <Stack.Screen
        name="codeRecoveryChangePassword"
        component={CodeRecoveryChangePassword}
      />
      <Stack.Screen name="feedbackRecovery" component={FeedbackRecovery} />
      <Stack.Screen name="signupWelcome" component={SignupWelcome} />
      <Stack.Screen
        name="signupFeedback"
        component={SignupFeedback}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="incompatibleClientFeedback"
        component={IncompatibleClientFeedback}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="signupQuestion0" component={SignupQuestion0} />
      <Stack.Screen
        name="signupQuestion1"
        component={SignupQuestion1}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="signupQuestion2"
        component={SignupQuestion2}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="signupForm"
        component={SignupForm}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="signupSchedule"
        component={SignupSchedule}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="scheduleFeedback" component={ScheduleFeedback} />
      <Stack.Screen
        name="home"
        component={BottomTabs}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="opportunitieDetail"
        component={OpportunitieDetail}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="MyAccounts"
        component={Profiles}
        options={{
          animationEnabled: Platform.OS === 'ios',
        }}
      />
      <Stack.Screen
        name="profilePorfolio"
        component={ProfilePorfolio}
        options={{
          animationEnabled: Platform.OS === 'ios',
        }}
      />
      <Stack.Screen
        name="previewPdf"
        component={PreviewPdf}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="opportunitieInterestConfirmation"
        component={OpportunitieInterestConfirmation}
      />
      <Stack.Screen name="Opportunities" component={Opportunities} />
      <Stack.Screen name="about" component={About} />
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="accountScreen" component={AccountScreen} />
      <Stack.Screen name="setupScreen" component={SetupScreen} />
      <Stack.Screen name="aboutScreen" component={AboutScreen} />
      <Stack.Screen name="contactScreen" component={ContactsScreen} />
      <Stack.Screen name="helpScreen" component={HelpScreen} />
      <Stack.Screen name="subdocumentScreen" component={SubdocumentScreen} />
      <Stack.Screen
        name="walletTutorialScreen"
        component={WalletTutorialScreen}
      />
      <Stack.Screen
        name="opportunitiesTutorialScreen"
        component={OpportunitiesTutorialScreen}
      />

      <Stack.Screen
        name="fundDetailsTutorialScreen"
        component={FundDetailsTutorialScreen}
      />
      <Stack.Screen
        name="opportunityDetailsTutorialScreen"
        component={OpportunityDetailsTutorialScreen}
      />

      <Stack.Screen
        name="accountRemovalScreen"
        component={AccountRemoveScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="contactMessageScreen"
        component={ContactMessageScreen}
      />
      <Stack.Screen
        name="fundsDetailsScreen"
        component={FundsDetailsScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="fundsInterestSent" component={FundsInterestSent} />
      <Stack.Screen
        name="changePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="messageSentScreen" component={MessageSentScreen} />
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name="logoutScreen"
        component={LogoutScreen}
      />
      <Stack.Screen name="fundsList" component={FundsList} />
      <Stack.Screen name="filesScreen" component={FilesScreen} />
      <Stack.Screen name="scheduleMeeting" component={ScheduleMeeting} /> */}
    </Stack.Navigator>
  );
}
