import type { ElementType, ReactNode } from 'react';
import { TypeAnimation } from 'react-type-animation';
import type { TitleProps } from '@mantine/core';
import { em, Flex, Image, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MainLayout from 'components/main-layout';
import useTheme from 'hooks/use-theme';

type HeadingProps = {
  as?: ElementType;
  color?: TitleProps['c'];
  children: ReactNode;
  fontWeight?: TitleProps['fw'];
};

const Heading = ({ as, color, children, fontWeight }: HeadingProps) => (
  <Title
    variant='heading'
    order={1}
    fz={{ base: '2rem', md: '5rem' }}
    ta={{ base: 'center', md: 'left' }}
    c={color}
    component={as}
    fw={fontWeight}
    style={{ transition: 'all 0.5s' }}
  >
    {children}
  </Title>
);

export default () => {
  const { isLightTheme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(991)})`);

  return (
    <MainLayout fullyCentered>
      <Flex
        data-test-id='HOME_PAGE'
        w='100%'
        direction={{ base: 'column-reverse', md: 'row' }}
        gap={{ base: '2rem', md: 'lg' }}
        align='center'
        justify='space-evenly'
      >
        <Stack gap='sm'>
          <Heading>
            Hi, I'm{' '}
            <Heading
              color={isLightTheme ? '#3FB25F' : '#6dca86'}
              as='span'
              fontWeight='900'
            >
              Manuel Perez
            </Heading>
          </Heading>

          <TypeAnimation
            key={`type-animation-key-${isMobile}-${isTablet}`}
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'a frontend developer',
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              'a backend developer',
              1500,
              'a sort of Devops engineer',
              1500,
              'a code lover',
              3000,
            ]}
            // @ts-expect-error code tag
            wrapper='code'
            speed={30}
            style={{
              fontSize: isMobile ? '1.5em' : '2rem',
              textAlign: isMobile || isTablet ? 'center' : 'left',
              margin: isMobile ? '1rem 0' : '',
              transition: 'all 0.5s',
            }}
            repeat={Infinity}
          />
          <Text
            w={{ base: '100%', md: '95%' }}
            ta={{ base: 'center', md: 'left' }}
            fz={{ base: 'lg', md: 'xl' }}
          >
            Welcome to my website! you will find some information about me and
            my professional work. I'm a software engineer who truly loves
            writing code and diving into new technologies to explore in order to
            deliver a great product to my consultee.
          </Text>
        </Stack>

        <Flex w={{ base: '75%', xs: '60%', sm: '20rem', md: '40rem' }}>
          <Image
            src='/images/manu-profile.png'
            display='flex'
            radius='50rem'
            style={{
              boxShadow: '2px 2px 57px 7px rgba(20,20,20,0.99)',
              border: '.25rem #F5F5F5 solid',
              transition: 'all 0.5s',
            }}
          />
        </Flex>
      </Flex>
    </MainLayout>
  );
};
