import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  white: '#ffffff',
  gray: {
    x_light: '#f5f5f5',
    light: '#cecece',
  },
  red: {
    x_light: '#feebdb',
    light: '#fc8f8f',
    main: '#f43142',
  },
  black: '#000000',
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
