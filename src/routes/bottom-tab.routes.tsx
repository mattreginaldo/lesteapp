import React, { useCallback, useContext } from 'react';
import { Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '~/styles/theme';
import CustomTabBar from './CustomTabBar';
import { useFocusEffect } from '@react-navigation/native';

/** Pages */
import Opportunities from '../pages/opportunities';
import Settings from '../pages/settings';
import Home from '~/pages/home';
import Notifications from '~/pages/notifications';
import { MyAccountsContextNavigator } from './_app.routes';

import { BottomTabScreenList } from './types';

/** Redux */
import * as NotificationsActions from '~/store/modules/notification/actions';
import { RootState } from '~/store/modules/rootReducer';
import { NotificationI } from '~/store/modules/notification/types';

/** Assets */
import NotificationIcon from '~/assets/icons/notificationBell.svg';
import OpportunitiesTabIcon from '~/assets/icons/portfolioTabIcon.svg';
import WalletTabIcon from '~/assets/icons/walletTabIcon.svg';
import ProfileTabIcon from '~/assets/icons/profileTabIcon.svg';
import MultiAccountTabIcon from '~/assets/icons/multiaccountTabIcon.svg';

import WalletContext from '~/contexts/wallet';

import * as S from './styles';

export default function BottomTab() {
  const { Navigator, Screen } = createBottomTabNavigator<BottomTabScreenList>();
  const dispatch = useDispatch();

  const {
    user: { notificationSent, isAccountManager },
  } = useSelector((state: RootState) => state.session);
  const { hasNotifications } = useSelector(
    (state: RootState) => state.notification
  );
  const notifications = notificationSent || [];

  const {
    walletState: { hasInvestmentPosition },
  } = useContext(WalletContext);

  function tabIconStyle(focused: boolean): object {
    return {
      backgroundColor: focused ? theme.colors.primary : 'transparent',
      height: theme.responsive.value(Platform.OS === 'ios' ? 43 : 48),
      width: theme.responsive.value(Platform.OS === 'ios' ? 43 : 48),
      marginTop: Platform.OS === 'ios' ? 10 : 0,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  const notificationsArrayFormat = useCallback(() => {
    return (
      Object.keys(notifications).map((key) => {
        return {
          date: key,
          notifications: notifications[
            key as keyof typeof notificationSent
          ] as NotificationI[],
        };
      }) || []
    );
  }, [notifications]);

  const checkHasNotifications = () => {
    notificationsArrayFormat().map((notificationItem) => {
      notificationItem.notifications.map((notification) => {
        if (!notification.readingDate) {
          dispatch(
            NotificationsActions.hasNotifications({ hasNotifications: true })
          );
        }
      });
    });
  };

  useFocusEffect(() => {
    checkHasNotifications();
  });

  return (
    <Navigator
      lazy
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      tabBarOptions={{ showLabel: false }}
    >
      <Screen
        name="Home"
        component={Home}
        listeners={{
          tabPress: (e) => {
            if (!hasInvestmentPosition && !isAccountManager) e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tabIconStyle(focused)}>
              <WalletTabIcon
                fill={
                  hasInvestmentPosition || isAccountManager
                    ? focused
                      ? '#FFf'
                      : theme.colors.primary
                    : '#aaaaaa'
                }
                width={theme.responsive.value(20)}
              />
            </View>
          ),
        }}
      />

      {isAccountManager && (
        <Screen
          name="MyAccountsContext"
          component={MyAccountsContextNavigator}
          options={{
            tabBarTestID: 'my-accounts-tab',
            tabBarIcon: ({ focused }) => (
              <View style={tabIconStyle(focused)}>
                <MultiAccountTabIcon
                  fill={focused ? '#FFf' : theme.colors.primary}
                  width={theme.responsive.value(40)}
                />
              </View>
            ),
          }}
        />
      )}

      <Screen
        name="Opportunities"
        component={Opportunities}
        options={{
          tabBarTestID: 'opportunities-tab',
          tabBarIcon: ({ focused }) => (
            <View style={tabIconStyle(focused)}>
              <OpportunitiesTabIcon
                fill={focused ? '#FFf' : theme.colors.primary}
                width={theme.responsive.value(20)}
              />
            </View>
          ),
        }}
      />

      <Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tabIconStyle(focused)}>
              {hasNotifications ? <S.NewNotification /> : null}

              <NotificationIcon
                fill={focused ? '#FFf' : theme.colors.primary}
                width={theme.responsive.value(20)}
              />
            </View>
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarTestID: 'settings-tab',
          tabBarIcon: ({ focused }) => (
            <View style={tabIconStyle(focused)}>
              <ProfileTabIcon
                fill={focused ? '#FFf' : theme.colors.primary}
                width={theme.responsive.value(20)}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
