import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  mainBlue: '#4c73c4',
  lightBlue: '##8ebbf2',
  red: '#ff0000',
  mainOrange: '#e9875f',
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