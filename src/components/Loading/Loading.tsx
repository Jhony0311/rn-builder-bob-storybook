import React from 'react';
import LottieView from 'lottie-react-native';

import animation from '../../assets/animations/loader.json';

import type {ViewStyle} from 'react-native';
import type {Size} from '../../types/dimensions';

const SIZE = 32;

const SIZES: {[K in Size]: number} = {
  tiny: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  giant: 1.8,
};

export type LoadingProps = {
  color?: string;
  size?: Size | number;
  style?: ViewStyle;
};

function Loading(props: LoadingProps): React.ReactElement<LottieView> | null {
  const {size = 'medium'} = props;
  const styledSize = React.useMemo<ViewStyle>((): ViewStyle => {
    if (typeof size === 'string') {
      // copied from the original project and this doesn't work as expected,
      // ask design for sizes;
      return {
        width: SIZE + 2,
        height: SIZE * SIZES[size],
      };
    }
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return <LottieView style={styledSize} source={animation} testID="loading" autoPlay loop />;
}

export default Loading;
