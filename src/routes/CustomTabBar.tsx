import React from 'react';
import {
  BottomTabBar,
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { blurStyles, bottomTabStyles, wrapperStyle } from '~/styles/blur';
import { View } from 'react-native';

export default function CustomTabBar(
  props: BottomTabBarProps<BottomTabBarOptions>
) {
  return (
    <View style={wrapperStyle}>
      <BlurView
        style={blurStyles}
        blurType="xlight"
        blurAmount={15}
        blurRadius={5}
        overlayColor="transparent"
      >
        <BottomTabBar {...props} style={bottomTabStyles} />
      </BlurView>
    </View>
  );
}
