'use client';

import { useState } from 'react';
import {
  Accordion,
  Anchor,
  em,
  Flex,
  Stack,
  Text,
  Timeline,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  HoverAnimated,
  FallDownAnimated,
  PendulumFallAnimated,
  ScaleOutAnimated,
} from 'components/animated';
import CompanyIcon from 'components/company-icon';
import MainLayout from 'components/main-layout';
import JobModal from 'components/job-modal';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import portfolioPageVerbiage from 'languages/portfolio-page';
import useModal from 'providers/modal/use-modal';
import { analyticsEvent } from 'utils/analytics';
import { useLanguageState } from 'store/language-atom';

type Props = {
  portfolio: PortfolioNew;
};

export default ({ portfolio }: Props) => {
  const language = useLanguageState();
  const isEnglish = language === 'EN';
  const portfolioPage = useLanguageVerbiage(portfolioPageVerbiage);
  const { md, lg } = useWidthBreakpoints();
  const isBaseWidth = useMediaQuery(`(max-width: ${em(575)})`);
  const [professionalItem, setProfessionalItem] = useState<string>('');
  const [personalItem, setPersonalItem] = useState<string>('');
  const [openJobModal] = useModal(JobModal);

  const handleMoreDetails = (job: JobNew) => {
    openJobModal(job);

    analyticsEvent({
      action: 'Job full details modal opened',
      category: 'click',
      label: `"${job.title}" details viewed`,
    });
  };

  const handleProfessionalJobChange = (item: string) => {
    analyticsEvent({
      action: `Professional job selected`,
      category: 'click',
      label: `"${item}" details viewed`,
    });

    setProfessionalItem(item || '');
  };

  const handlePersonalJobChange = (item: string) => {
    analyticsEvent({
      action: `${isBaseWidth ? 'Professional' : 'Personal'} job selected`,
      category: 'click',
      label: `"${item}" details viewed`,
    });

    return isBaseWidth
      ? setProfessionalItem(item || '')
      : setPersonalItem(item || '');
  };

  return (
    <MainLayout pageTitle='portfolio' fullyCentered>
      <Flex
        data-test-id='PORTFOLIO_PAGE'
        w='100%'
        direction={{ base: 'column', xs: 'row' }}
        gap='xl'
        align='flex-start'
        justify='space-around'
      >
        <Stack
          gap='lg'
          align={lg ? 'center' : 'flex-start'}
          w={{ base: '100%', xs: '50%' }}
        >
          <ScaleOutAnimated>
            <Title
              variant='heading'
              order={2}
              fz={{ base: '1.5rem', md: '3rem' }}
              ta={{ base: 'left', xs: 'center', md: 'left' }}
              style={{ transition: 'all 0.5s' }}
            >
              {portfolioPage.professionalWork}
            </Title>
          </ScaleOutAnimated>

          <PendulumFallAnimated style={{ width: md ? '75%' : '100%' }}>
            <Timeline active={Infinity} bulletSize={25} lineWidth={5}>
              {portfolio.professional.map(({ year, work }, index) => (
                <Timeline.Item key={index}>
                  <FallDownAnimated
                    initial='hidden'
                    animate='visible'
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.2,
                    }}
                  >
                    <Text fw={900}>{year}</Text>
                    <Accordion
                      chevronPosition='left'
                      value={professionalItem}
                      onChange={(value) => setProfessionalItem(value || '')}
                    >
                      {work.map((job, index) => (
                        <HoverAnimated
                          key={index}
                          active={job.title === professionalItem}
                          activeWithMarginTop
                        >
                          <Accordion.Item value={job.title}>
                            <Accordion.Control
                              onClick={() =>
                                handleProfessionalJobChange(job.title)
                              }
                              children={
                                <Flex align='center' gap='xs'>
                                  <CompanyIcon company={job.title} />
                                  {job.title}
                                </Flex>
                              }
                            />
                            <Accordion.Panel
                              children={
                                <Stack gap='xs'>
                                  {isEnglish
                                    ? job.description.en
                                    : job.description.es}
                                  <Anchor
                                    children={portfolioPage.moreDetails}
                                    onClick={() => handleMoreDetails(job)}
                                  />
                                </Stack>
                              }
                            />
                          </Accordion.Item>
                        </HoverAnimated>
                      ))}
                    </Accordion>
                  </FallDownAnimated>
                </Timeline.Item>
              ))}
            </Timeline>
          </PendulumFallAnimated>
        </Stack>

        <Stack
          gap='lg'
          align={lg ? 'center' : 'flex-start'}
          w={{ base: '100%', xs: '50%' }}
        >
          <ScaleOutAnimated>
            <Title
              variant='heading'
              order={2}
              fz={{ base: '1.5rem', md: '3rem' }}
              ta={{ base: 'left', xs: 'center', md: 'left' }}
              style={{ transition: 'all 0.5s' }}
            >
              {portfolioPage.personalProjects}
            </Title>
          </ScaleOutAnimated>
          <PendulumFallAnimated style={{ width: md ? '75%' : '100%' }}>
            <Timeline active={99} bulletSize={25} lineWidth={5}>
              {portfolio.personal.map(({ year, work }, index) => (
                <Timeline.Item key={index}>
                  <FallDownAnimated
                    initial='hidden'
                    animate='visible'
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.2,
                    }}
                  >
                    <Text fw={900}>{year}</Text>
                    <Accordion
                      w='100%'
                      chevronPosition='left'
                      value={isBaseWidth ? professionalItem : personalItem}
                      onChange={(value) =>
                        isBaseWidth
                          ? setProfessionalItem(value || '')
                          : setPersonalItem(value || '')
                      }
                    >
                      {work.map((job, index) => (
                        <HoverAnimated
                          key={index}
                          active={job.title === personalItem}
                          activeWithMarginTop
                        >
                          <Accordion.Item value={job.title}>
                            <Accordion.Control
                              onClick={() => handlePersonalJobChange(job.title)}
                              children={
                                <Flex align='center' gap='xs'>
                                  <CompanyIcon company={job.title} />
                                  {job.title}
                                </Flex>
                              }
                            />
                            <Accordion.Panel
                              children={
                                <Stack gap='xs'>
                                  {isEnglish
                                    ? job.description.en
                                    : job.description.es}
                                  <Anchor
                                    children='See more details'
                                    onClick={() => handleMoreDetails(job)}
                                  />
                                </Stack>
                              }
                            />
                          </Accordion.Item>
                        </HoverAnimated>
                      ))}
                    </Accordion>
                  </FallDownAnimated>
                </Timeline.Item>
              ))}
            </Timeline>
          </PendulumFallAnimated>
        </Stack>
      </Flex>
    </MainLayout>
  );
};
