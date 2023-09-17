import { FC, PropsWithChildren } from 'react';
import { RootStoreContext, RootStore } from '../stores';
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme.ts';

interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RootStoreContext.Provider>
  );
};
