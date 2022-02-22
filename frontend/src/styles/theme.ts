import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  mainRed: '#f43142',
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
