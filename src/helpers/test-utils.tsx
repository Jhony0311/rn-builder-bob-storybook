/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render} from '@testing-library/react-native';

function customRender(ui: React.ReactElement<any>, options = {}) {
  const Wrapper = ({children}: {children: React.ReactChild}) => <>{children}</>;
  return render(ui, {wrapper: Wrapper, ...options});
}

export * from '@testing-library/react-native';

export {customRender as render};
