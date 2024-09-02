import { RouterProvider } from 'react-router-dom';
import router from 'router';
import { MantineProvider } from '@mantine/core';
import mainTheme from 'mantine/theme';
import variableResolver from 'mantine/variable-resolver';
import '@mantine/core/styles.css';
import ModalProvider from 'providers/modal/index';

export default () => (
  <>
    {/* @ts-expect-error It's ok */}
    <style jsx='true' global='true'>
      {`
        /* For light mode */
        :root[data-mantine-color-scheme='light'] {
          --mantine-color-body: #f5f5f5 !important;
        }

        /* For dark mode */
        :root[data-mantine-color-scheme='dark'] {
          --mantine-color-body: #464646 !important;
        }
      `}
    </style>
    <MantineProvider
      theme={mainTheme}
      cssVariablesResolver={variableResolver}
      defaultColorScheme='light'
    >
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </MantineProvider>
  </>
);
