'use client';

import { TypeAnimation } from 'react-type-animation';
import { em, Flex, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
// import NextImage from 'next/image';
import Link from 'components/link';
import {
  FallDownAnimated,
  HoverAnimated,
  ParentWrapper,
  ScaleOutAnimated,
} from 'components/animated';
import Heading from 'components/heading';
import Image from 'components/image';
import MainLayout from 'components/main-layout';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useTheme from 'hooks/use-theme';
import homePageVerbiage from 'languages/home-page';
import { useLanguageState } from 'store/language-atom';

type Props = {
  homeSection: HomeSection;
};

export default ({ homeSection }: Props) => {
  const language = useLanguageState();
  const isEnglish = language === 'EN';
  const homePage = useLanguageVerbiage(homePageVerbiage);
  const { isLightTheme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(991)})`);

  return (
    <MainLayout pageTitle='home' fullyCentered>
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
                {`${homePage.iAm} `}
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
                height: isMobile || isTablet ? '5rem' : 'auto',
                alignItems: 'center',
                justifyContent: isMobile || isTablet ? 'center' : 'left',
              }}
            >
              <TypeAnimation
                // eslint-disable-next-line max-len
                key={`type-animation-key-${isMobile}-${isTablet}-${homePage.iAm}`}
                sequence={homePage.typings}
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
                {isEnglish ? homeSection.text.en : homeSection.text.es}
              </Text>
            </FallDownAnimated>

            <Flex w='100%' mt='md' justify={{ base: 'center', md: 'left' }}>
              <FallDownAnimated>
                <HoverAnimated scaleOut={1.07}>
                  <Link
                    href='/portfolio'
                    fz={{ base: 'lg', md: 'xl' }}
                    style={{ transition: 'all 0.5s' }}
                  >
                    {homePage.portfolioLink}
                  </Link>
                </HoverAnimated>
              </FallDownAnimated>
            </Flex>
          </Stack>
        </ParentWrapper>

        <Flex
          w={{ base: '75%', xs: '60%', sm: '20rem', md: '40rem' }}
          pos='relative'
        >
          <ScaleOutAnimated style={{ width: '100%', position: 'relative' }}>
            <Image
              priority
              loading='eager'
              width={350}
              height={350}
              src={homeSection.profile}
              display='flex'
              radius='50rem'
              style={{
                width: '100%',
                height: 'auto',
                boxShadow: '2px 2px 57px 7px rgba(20,20,20,0.99)',
                border: '.45rem #F5F5F5 solid',
                transition: 'all 0.5s',
              }}
              alt='Home section profile image'
            />
          </ScaleOutAnimated>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
