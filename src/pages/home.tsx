import { useState } from 'react';
import { Anchor, Button, Flex, Image, Stack, Title } from '@mantine/core';
import viteLogo from '/vite.svg';
import reactLogo from 'assets/react.svg';
import Link from 'components/link';
import MainLayout from 'components/main-layout';
import 'App.css';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <MainLayout>
      <Stack align='center'>
        <Flex gap='md'>
          <Anchor href='https://vitejs.dev' target='_blank'>
            <Image h='6rem' src={viteLogo} alt='Vite logo' />
          </Anchor>

          <Anchor href='https://react.dev' target='_blank'>
            <Image
              h='6rem'
              src={reactLogo}
              className='logo react'
              alt='React logo'
            />
          </Anchor>
        </Flex>

        <Title order={1} size='3rem' style={{ textAlign: 'center' }}>
          Manu Perez's website will be built here
        </Title>
        <Title order={2} size='2.5rem'>
          Coming soon
        </Title>

        <Link to='/portfolio'>Go to portfolio page</Link>

        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </Stack>
    </MainLayout>
  );
};
