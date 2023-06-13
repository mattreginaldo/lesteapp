import React, { forwardRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
import AppRoutes from './_app.routes';
// import { getVersion, getBuildNumber } from 'react-native-device-info';
// import * as Sentry from '@sentry/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import OneSignal, { OSNotification } from 'react-native-onesignal';
// import Heap from '@heap/react-native-heap';

/** Utils */
// import { navigateOpenSignURL } from '~/utils/deepLink';

/** Redux */
// import * as NotificationsActions from '~/store/modules/notification/actions';
// import * as GeneralActions from '../store/modules/general/actions';

/** Context API */
// import { WalletContextProvider } from '~/contexts/wallet';

/** Services */
// import { init } from '~/services/notifications';
// import { setNavigationRef, getNavigationRef } from '../services/navigation';

// const HeapNavigationContainer =
//   Heap.withReactNavigationAutotrack(NavigationContainer);

// // Construct a new instrumentation instance. This is needed to communicate between the integration and React
// const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

// Sentry.init({
//   dsn: 'https://3e294edba5d047778eceb2383567eea4@o1306182.ingest.sentry.io/6548352',
//   tracesSampleRate: 1.0,
//   environment: __DEV__ ? 'development' : 'production',
//   release: getVersion(),
//   dist: getBuildNumber(),

//   integrations: [
//     new Sentry.ReactNativeTracing({
//       // Pass instrumentation to be used as `routingInstrumentation`
//       routingInstrumentation,
//       // ...
//     }),
//   ],
//   beforeSend(event) {
//     // Modify the event here
//     if (event.user) {
//       // Don't send user's email address
//       delete event.user.email;
//     }
//     return event;
//   },
// });

const App = () => {
  // const dispatch = useDispatch();

  // const routesWithoutRedirection = [
  //   'signin',
  //   'update',
  //   'recoveryPassword',
  //   'codeRecovery',
  //   'codeRecoveryChangePassword',
  //   'feedbackRecovery',
  //   'signupWelcome',
  //   'signupFeedback',
  //   'incompatibleClientFeedback',
  //   'signupForm',
  //   'welcome',
  // ];

  // function updateCurrentScreen(state: any) {
  //   const nav = getNavigationRef();

  //   if (nav) {
  //     const route = nav?.getCurrentRoute();
  //     dispatch(
  //       GeneralActions.setCurrentScreenName({ screenName: route?.name || '' })
  //     );
  //   }
  // }

  // useEffect(() => {
  //   init();

  //   OneSignal.setNotificationWillShowInForegroundHandler(
  //     (notificationReceivedEvent) => {
  //       let notification = notificationReceivedEvent.getNotification();
  //       notificationReceivedEvent.complete(notification);
  //       onReceived();
  //     }
  //   );

  //   OneSignal.setNotificationOpenedHandler((openedEvent) => {
  //     const { notification } = openedEvent;
  //     onOpened(notification);
  //   });
  // }, []);

  // /**
  //  * Handling notifications received while app in foreground
  //  */
  // const onReceived = () => {
  //   dispatch(NotificationsActions.hasNotifications({ hasNotifications: true }));
  // };

  // /**
  //  * Handling with notifications while click and opening in background
  //  * @param result - Receive notification from OneSignal
  //  */
  // const onOpened = (notification: OSNotification) => {
  //   const { launchURL } = notification;

  //   if (launchURL) {
  //     const nav = getNavigationRef();
  //     const { name: currentRoute } = nav?.getCurrentRoute();

  //     if (routesWithoutRedirection.includes(currentRoute)) {
  //       AsyncStorage.setItem('@deep_linking', launchURL);
  //     } else {
  //       navigateOpenSignURL(launchURL);
  //     }
  //   }
  // };

  return (
    // <HeapNavigationContainer
    //   ref={setNavigationRef}
    //   onStateChange={updateCurrentScreen}
    //   onReady={() => {
    //     // Register the navigation container with the instrumentation
    //     routingInstrumentation.registerNavigationContainer(getNavigationRef());
    //   }}
    // >
    //   <WalletContextProvider>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
    //   </WalletContextProvider>
    // </HeapNavigationContainer>
  );
};

export default App;
