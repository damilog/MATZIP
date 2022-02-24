import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  white: '#ffffff',
  lightGray: '#f9f9f9',
  gray: '#f5f5f5',
  black: '#000000',
  mainRed: '#f43142',
  lightRed: '#feebdb',
};

const secondaryColors = {};
const fontSizes: string[] = [];

const theme = {
  colors,
  fontSizes,
  secondaryColors,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
