// styled.d.ts
import 'styled-components';
import theme from './theme.ts';

declare module 'styled-components' {
  export type DefaultTheme = typeof theme;
}
