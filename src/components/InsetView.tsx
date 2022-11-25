import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface InsetViewProps {
  children: ReactNode;
  applyInsets?: boolean;
}

export default function InsetView({children}: InsetViewProps) {
  const insets = useSafeAreaInsets();
  return <View>{children}</View>;
}
