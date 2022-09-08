import type {StyleSheet} from 'react-native';

export type ThemeValue = string | undefined;
export type ThemeType = Record<string, ThemeValue>;
export type Styles<T> = StyleSheet.NamedStyles<T>;
export type StyleType = Record<string, string>;
export type LiteralUnion<T extends U, U = string> = T | (U & unknown);