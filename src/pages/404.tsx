import { MdOutlineHome } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Center, em, Flex, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Icon404 from 'components/icons/404';
import Link from 'components/link';
import useNotPageFoundPage from 'hooks/language/use-not-page-found-page';

export default () => {
  const notFoundPage = useNotPageFoundPage();
  const location = useLocation();
  const isBaseMaxWidth = useMediaQuery(`(max-width: ${em(575)})`);
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

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
            <Title
              variant='heading'
              order={1}
              fz={{ base: '3rem', md: '5rem' }}
              ta={{ base: 'center', md: 'left' }}
              style={{ transition: 'all 0.5s' }}
            >
              {notFoundPage.title}
            </Title>

            <Text
              fz='xl'
              w={{ base: 'auto', md: '60%' }}
              ta={{ base: 'center', md: 'left' }}
              style={{ transition: 'all 0.5s' }}
            >
              {notFoundPage.message}:{' '}
              <Text
                component='span'
                truncate
                title={`${location.pathname}${location.search}`}
              >
                <code>
                  `{location.pathname}
                  {location.search}`
                </code>
              </Text>
            </Text>

            <Link to='/' fz='lg'>
              <Flex
                align='center'
                justify={{ base: 'center', md: 'left' }}
                gap='xs'
              >
                <MdOutlineHome size='1.5rem' />
                {notFoundPage.goBackLink}
              </Flex>
            </Link>
          </Stack>

          <Icon404
            width={isBaseMaxWidth ? '60%' : 400}
            height={isBaseMaxWidth ? '60%' : 400}
            style={{ transition: 'all 0.5s' }}
          />
        </Flex>
      </Center>
    </Flex>
  );
};
