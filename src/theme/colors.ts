import {parseLiterals, completeText} from '../helpers/templateLiterals';

export const palette = {
  colorPrimary100: '#E6D8FB',
  colorPrimary200: '#CBB2F7',
  colorPrimary300: '#A887E8',
  colorPrimary400: '#8664D2',
  colorPrimary500: '#5A37B4',
  colorPrimary600: '#44289A',
  colorPrimary700: '#321B81',
  colorPrimary800: '#221168',
  colorPrimary900: '#170A56',

  colorSecondary100: '#D6FCDF',
  colorSecondary200: '#B8F6CD',
  colorSecondary300: '#83F0B3',
  colorSecondary400: '#61E1A7',
  colorSecondary500: '#32CD96',
  colorSecondary600: '#24B08C',
  colorSecondary700: '#199380',
  colorSecondary800: '#0F7670',
  colorSecondary900: '#095E62',

  colorTertiary100: '#F2FCF5',
  colorTertiary200: '#E5F9EE',
  colorTertiary300: '#D1EEE1',
  colorTertiary400: '#BCDED2',
  colorTertiary500: '#A0C8BE',
  colorTertiary600: '#74ACA3',
  colorTertiary700: '#50908C',
  colorTertiary800: '#337174',
  colorTertiary900: '#1E5760',

  colorYellow100: '#FFF1AA',
  colorYellow200: '#FFE97C',
  colorYellow300: '#FFDE37',
  colorYellow400: '#FDD400',
  colorYellow500: '#E9C301',
  colorYellow600: '#E9B601',
  colorYellow700: '#E9A801',
  colorYellow800: '#A7730E',
  colorYellow900: '#675600',

  colorBasic100: '#FFFFFF',
  colorBasic200: '#E5E5E5',
  colorBasic300: '#E9DEDE',
  colorBasic400: '#BDB0B0',
  colorBasic500: '#7B7375',
  colorBasic600: '#5C5456',
  colorBasic700: '#484143',
  colorBasic800: '#2B2728',
  colorBasic900: '#231F20',
  colorBasic1000: '#1E1619',
  colorBasic1100: '#190F13',

  colorAlertError: '#F28686',
  colorAlertSuccess: '#6FE1D2',
  colorAlertInfo: '#364BB2',
};

export function colors(literals: TemplateStringsArray) {
  const name = completeText(parseLiterals(literals), 'color');
  if (!(name in palette)) {
    throw new Error(`Requested color named ${name} was not found on theme palette.`);
  }
  return palette[name as keyof typeof palette];
}
