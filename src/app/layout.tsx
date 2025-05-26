import type { ReactNode } from 'react';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import { Provider as JotaiProvider } from 'jotai';
import mainTheme from 'mantine/theme';
import variableResolver from 'mantine/variable-resolver';
import ModalProvider from 'providers/modal';
import ReactGA from 'react-ga4';
import { antonSC, cabin, graduate } from 'utils/fonts';
import isProd from 'utils/is-prod';
import 'base-layout.css';
import '@mantine/core/styles.css';

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? '';

if (isProd() && GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
}

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => (
  <html lang='en' {...mantineHtmlProps}>
    <head>
      <link rel='icon' type='image/ico' href='/manupdev-logo.ico' />
      <ColorSchemeScript />
    </head>
    <body className={`${antonSC.style} ${cabin.style} ${graduate.style}`}>
      <JotaiProvider>
        <MantineProvider
          theme={mainTheme}
          cssVariablesResolver={variableResolver}
          defaultColorScheme='light'
        >
          <ModalProvider>{children}</ModalProvider>
        </MantineProvider>
      </JotaiProvider>
    </body>
  </html>
);
