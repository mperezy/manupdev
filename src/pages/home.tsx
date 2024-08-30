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

const Heading = ({ as, color, children, fontWeight }: HeadingProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Title
      order={1}
      size={isMobile ? '2rem' : '5rem'}
      c={color}
      component={as}
      fw={fontWeight}
      style={{ textAlign: isMobile ? 'center' : 'left' }}
    >
      {children}
    </Title>
  );
};

export default () => {
  const { isLightTheme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <MainLayout totallyCentered>
      <Stack w='100%' align='center' py='xl'>
        <Flex
          w='100%'
          direction={{ base: 'column-reverse', md: 'row' }}
          gap={isMobile ? '2rem' : 'lg'}
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
              key={`type-animation-key-${isMobile}`}
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'a frontend developer',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'a backend developer',
                1500,
                'a sort of Devops engineer',
                1500,
                'a code lover',
                1500,
              ]}
              wrapper='span'
              speed={30}
              style={{
                fontSize: '2em',
                textAlign: 'center',
                display: isMobile ? 'block' : 'flex',
              }}
              repeat={Infinity}
            />
            <Text
              w={isMobile ? 'auto' : '95%'}
              style={{ textAlign: isMobile ? 'center' : 'left' }}
            >
              Welcome to my website! you will find some information about me and
              my professional work. I'm a software engineer who truly loves
              writing code and diving into new technologies to explore in order
              to deliver a great product to my consultee.
            </Text>
          </Stack>

          <Image
            src='/images/manu-profile.png'
            display='flex'
            w={{ base: '90%', xs: '60%', sm: '20rem', md: '27rem' }}
            radius='50rem'
            style={{
              boxShadow: '2px 2px 57px 7px rgba(20,20,20,0.99)',
              border: '.25rem #F5F5F5 solid',
            }}
          />
        </Flex>
      </Stack>
    </MainLayout>
  );
};
