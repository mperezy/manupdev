import { Stack } from '@mantine/core';
import Link from 'components/link';
import MainLayout from 'components/main-layout';

export default () => (
  <MainLayout>
    <Stack align='center'>
      <p>This will be the portfolio page</p>
      <Link to='/'>Go back to home</Link>
    </Stack>
  </MainLayout>
);
