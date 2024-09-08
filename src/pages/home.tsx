import { TypeAnimation } from 'react-type-animation';
import { Anchor, em, Flex, Image, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  FallDownAnimated,
  HoverAnimated,
  ParentWrapper,
  ScaleOutAnimated,
} from 'components/animated';
import Heading from 'components/heading';
import MainLayout from 'components/main-layout';
import useTheme from 'hooks/use-theme';

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
        <ParentWrapper>
          <Stack gap='sm'>
            <FallDownAnimated>
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
            </FallDownAnimated>

            <FallDownAnimated
              style={{
                display: 'flex',
                justifyContent: isMobile || isTablet ? 'center' : 'left',
              }}
            >
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
            </FallDownAnimated>

            <FallDownAnimated>
              <Text
                w={{ base: '100%', md: '95%' }}
                ta={{ base: 'center', md: 'left' }}
                fz={{ base: 'lg', md: 'xl' }}
                style={{ transition: 'all 0.5s' }}
              >
                Welcome to my website! you will get a sneak peek my professional
                work. I'm a software engineer who truly loves writing code and
                diving into new technologies to explore in order to deliver a
                great product to my consultee.
              </Text>
            </FallDownAnimated>

            <Flex w='100%' mt='md' justify={{ base: 'center', md: 'left' }}>
              <FallDownAnimated>
                <HoverAnimated scaleOut={1.07}>
                  <Anchor
                    href='/portfolio'
                    fz={{ base: 'lg', md: 'xl' }}
                    style={{ transition: 'all 0.5s' }}
                  >
                    Check my portfolio
                  </Anchor>
                </HoverAnimated>
              </FallDownAnimated>
            </Flex>
          </Stack>
        </ParentWrapper>

        <Flex w={{ base: '75%', xs: '60%', sm: '20rem', md: '40rem' }}>
          <ScaleOutAnimated>
            <Image
              src='/images/manu-profile.png'
              display='flex'
              radius='50rem'
              style={{
                boxShadow: '2px 2px 57px 7px rgba(20,20,20,0.99)',
                border: '.45rem #F5F5F5 solid',
                transition: 'all 0.5s',
              }}
            />
          </ScaleOutAnimated>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
