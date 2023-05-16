import React, {Component} from 'react';
import {Animated, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  style?: ViewStyle;
  children?: React.ReactNode;
}

class GradientHelper extends Component<Props> {
  render() {
    const {style, children} = this.props as Props;

    return (
      <LinearGradient
        colors={[
          'rgba(2, 86, 165, 0.9)',
          'rgba(1, 54, 104, 0.9)',
          'rgba(17, 3, 39, 0.9)',
        ]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0.2, 0.4, 1]}
        style={[style, styles.bg]}>
        {children}
      </LinearGradient>
    );
  }
}

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper);

const BackgroundGradient = ({style, children}: Props) => (
  <AnimatedGradientHelper style={style} children={children} />
);

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    flex: 1,
  },
});

export default BackgroundGradient;
