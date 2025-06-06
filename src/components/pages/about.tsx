'use client';

import { Flex, Stack, Text } from '@mantine/core';
// import NextImage from 'next/image';
import {
  FallDownAnimated,
  HorizontalMoveAnimated,
  ScaleOutAnimated,
} from 'components/animated';
import CertificationCard from 'components/certification-card';
import Heading from 'components/heading';
import Image from 'components/image';
import MainLayout from 'components/main-layout';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import aboutMePageVerbiage from 'languages/about-me-page';
import getYearsAccurate from 'utils/get-years-accurate';
import { useLanguageState } from 'store/language-atom';

const yearsExperience = getYearsAccurate(new Date('2018-03-12'), new Date());

type Props = {
  aboutMeSection: AboutMeSection;
  certifications: Certification[];
};

export default ({ aboutMeSection, certifications }: Props) => {
  const { md } = useWidthBreakpoints();
  const language = useLanguageState();
  const isEnglish = language === 'EN';
  const aboutMePage = useLanguageVerbiage(aboutMePageVerbiage);

  return (
    <MainLayout pageTitle='about'>
      <Stack
        data-test-id='ABOUT_ME_PAGE'
        w='100%'
        gap='3rem'
        justify='center'
        align='center'
        my='xl'
      >
        <Flex direction={md ? 'row' : 'column'} gap='xl' align='center'>
          <Flex w={{ base: '90%', xs: '55%', md: '20rem' }}>
            <ScaleOutAnimated style={{ width: '100%', position: 'relative' }}>
              <Image
                priority
                loading='eager'
                width={250}
                height={250}
                src={aboutMeSection.profile}
                display='flex'
                radius='50rem'
                style={{
                  width: '100%',
                  height: 'auto',
                  boxShadow: '2px 2px 57px 7px rgba(20,20,20,0.99)',
                  border: '.45rem #F5F5F5 solid',
                  transition: 'all 0.5s',
                }}
                alt='About me profile image'
              />
            </ScaleOutAnimated>
          </Flex>

          <Flex w={{ base: '100%', md: '70%' }}>
            <HorizontalMoveAnimated
              // key={value}
              direction='left-to-right'
              // custom={index}
              delay={0.5}
            >
              <Text
                fz={{ base: 'lg', md: 'xl' }}
                ta={{ base: 'center', md: 'left' }}
              >
                {(isEnglish
                  ? aboutMeSection.text.en
                  : aboutMeSection.text.es
                ).replaceAll('&YEARS&', String(yearsExperience))}
              </Text>
            </HorizontalMoveAnimated>
          </Flex>
        </Flex>

        <Stack w='100%' align='center' gap='xl'>
          <FallDownAnimated
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            <Heading>{aboutMePage.certificationsTitle}</Heading>
          </FallDownAnimated>

          <Stack align='center' gap={'2.5rem'} w={{ base: '100%', md: '85%' }}>
            {certifications.map((certification, index) => (
              <HorizontalMoveAnimated
                key={index}
                direction={index % 2 === 0 ? 'left-to-right' : 'right-to-left'}
                custom={index}
                delay={1.5}
                style={{ width: '100%' }}
              >
                <Flex
                  key={index}
                  w='100%'
                  justify={
                    md
                      ? index % 2 === 0
                        ? 'flex-start'
                        : 'flex-end'
                      : 'center'
                  }
                >
                  <CertificationCard
                    certification={certification}
                    align={
                      md
                        ? index % 2 === 0
                          ? 'flex-start'
                          : 'flex-end'
                        : 'flex-start'
                    }
                  />
                </Flex>
              </HorizontalMoveAnimated>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
