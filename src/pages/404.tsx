import { Center, Stack } from '@mantine/core';
import Link from 'components/link';

export default () => (
  <Center h='100vh' px={{ base: 'md' }} pb={{ base: 'md' }}>
    <Stack w='100%' align='center'>
      <p>Looks like you are lost...</p>
      <Link to='/'>Go back to home</Link>
    </Stack>
  </Center>
);
