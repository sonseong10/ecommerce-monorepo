import { create } from '@storybook/theming/create';
import Logo from './logo.svg'

export default create({
  base: 'light',

  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: Logo,
  brandTarget: '_self',

  //
  colorPrimary: '#1d1d1d',
  colorSecondary: '#3da5f5',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e7e7e7',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e9e9e9',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});