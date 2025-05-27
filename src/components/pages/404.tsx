'use client';

import { MdOutlineHome } from 'react-icons/md';
import { usePathname, useSearchParams } from 'next/navigation';
import { Center, em, Flex, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Icon404 from 'components/icons/404';
import Link from 'components/link';
import Page from 'components/page';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import notFoundVerbiage from 'languages/not-found-page';

export default () => {
  const notFoundPage = useLanguageVerbiage(notFoundVerbiage);
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const search = queryParams.toString();
  const isBaseMaxWidth = useMediaQuery(`(max-width: ${em(575)})`);
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Page title='not-found' withFooter={false}>
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
                <Text component='span' truncate title={`${pathname}?${search}`}>
                  <code>
                    `{pathname}?{search}`
                  </code>
                </Text>
              </Text>

              <Link href='/public' fz='lg'>
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
    </Page>
  );
};
