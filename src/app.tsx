import { RouterProvider } from 'react-router-dom';
import router from 'router';
import { MantineProvider } from '@mantine/core';
import mainTheme from 'mantine/theme';
import '@mantine/core/styles.css';

export default () => (
  <MantineProvider theme={mainTheme} defaultColorScheme='dark'>
    <RouterProvider router={router} />
  </MantineProvider>
);
