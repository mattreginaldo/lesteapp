import {Dimensions} from 'react-native';
import {
  getStatusBarHeight,
  isIphoneX,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const theme = {
  colors: {
    primary: '#013767',
    secondary: '#85BACF',
    third: '#CB9E49',
    light_gray: '#E7E7E7',
    alert: '#EA3131',
    green: '#159b5c',
    pomegranate: '#EE2E2E',
    medium_gray: '#484848',
    dark_gray: '#737373',
    white: '#fff',
    medium_blue: '#2C6499',
    light_blue: '#E5E5E5',
    silver_gray: '#C4C4C4',
    white_opacity: 'rgba(255, 255, 255, 0.7)',
    black: '#000',
    main_gradient_colors: [
      'rgba(2, 86, 165, 0.9)',
      'rgba(1, 54, 104, 0.9)',
      'rgba(17, 3, 39, 0.9)',
    ],
  },
  font: {
    SweetSans: {
      regular: 'SweetSans-Regular',
      bold: 'SweetSans-Bold',
      light: 'SweetSans-Light',
      medium: 'SweetSans-Medium',
    },
    Montserrat: {
      regular: 'Montserrat-Regular',
      bold: 'Montserrat-SemiBold',
      light: 'Montserrat-Light',
    },
  },
  responsive: {
    value: RFValue,
    percentage: RFPercentage,
    isIphoneX: isIphoneX(),
    statusBarHeight: getStatusBarHeight(),
    bottomHeight: getBottomSpace(),
  },
  window: {
    width,
    height,
  },
  shadow: {
    shadowColor: '#0005',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
};

export type ITheme = typeof theme;
