import type { ReactNode } from 'react';
import { Center, Flex } from '@mantine/core';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => (
  <Flex w='100%' justify='center'>
    <Center h='100vh' maw='75em' px={{ base: 'md' }} pb={{ base: 'md' }}>
      {children}
    </Center>
  </Flex>
);
