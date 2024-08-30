import { MdOutlineHome } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Center, em, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'components/link';

export default () => {
  const location = useLocation();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  console.log({ location, isMobile });

  return (
    <Flex w='100%' justify='center'>
      <Center
        w='100%'
        maw='95em'
        h='100vh'
        px={{ base: 'md' }}
        pb={{ base: 'md' }}
      >
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          gap={{ base: 'xl', md: 'sm' }}
          align='center'
          justify='center'
        >
          <Stack
            w={{ base: '100%', sm: '60%', md: '55%', lg: '50%', xl: '40%' }}
            align={isMobile ? 'center' : 'left'}
          >
            <Title order={1} fz={isMobile ? '3rem' : '5rem'}>
              Page not found
            </Title>

            <Text
              display=''
              fz='xl'
              w={{ base: '80%', md: '60%' }}
              ta={{ base: 'center', md: 'left' }}
            >
              Looks like you are lost. We could not find the resource you are
              trying to get:{' '}
              <Text truncate title={`${location.pathname}${location.search}`}>
                <code>
                  `{location.pathname}
                  {location.search}`
                </code>
              </Text>
            </Text>

            <Link to='/' fz='lg'>
              <Flex align='center' gap='xs'>
                <MdOutlineHome size='1.5rem' />
                Go back to home
              </Flex>
            </Link>
          </Stack>

          <Flex w={{ base: '80%', sm: '70%', md: '40%', lg: '30%' }}>
            {/* TODO: This next must be a SVG image */}
            <Image src='/images/404.jpg' />
          </Flex>
        </Flex>
      </Center>
    </Flex>
  );
};
