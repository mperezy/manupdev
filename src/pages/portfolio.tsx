import { useState } from 'react';
import {
  Accordion,
  Anchor,
  em,
  Flex,
  Stack,
  Timeline,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MainLayout from 'components/main-layout';
import portfolio, { type Job } from 'constants/portfolio';
import JobModal from 'components/job-modal';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import useModal from 'providers/modal/use-modal';

export default () => {
  const { lg } = useWidthBreakpoints();
  const isBaseWidth = useMediaQuery(`(max-width: ${em(575)})`);
  const [professionalItem, setProfessionalItem] = useState<string>('');
  const [personalItem, setPersonalItem] = useState<string>('');
  const [openJobModal] = useModal(JobModal);

  const handleMoreDetails = (job: Job) => openJobModal(job);

  return (
    <MainLayout
      fullyCentered
      minHeight={isBaseWidth ? 'calc(50rem + 10dvh)' : undefined}
    >
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
          <Title
            variant='heading'
            order={2}
            fz={{ base: '1.5rem', md: '3rem' }}
            ta={{ base: 'left', xs: 'center', md: 'left' }}
            style={{ transition: 'all 0.5s' }}
          >
            Professional work
          </Title>

          <Timeline
            active={Infinity}
            bulletSize={25}
            lineWidth={5}
            w={{ base: '100%', md: '75%' }}
          >
            {portfolio.professional.map(({ year, work }, index) => (
              <Timeline.Item key={index} title={year}>
                <Accordion
                  chevronPosition='left'
                  value={professionalItem}
                  onChange={(value) => setProfessionalItem(value || '')}
                >
                  {work.map((job, index) => (
                    <Accordion.Item key={index} value={job.title}>
                      <Accordion.Control children={job.title} />
                      <Accordion.Panel
                        children={
                          <Stack gap='xs'>
                            {job.description}
                            <Anchor
                              children='See more details'
                              onClick={() => handleMoreDetails(job)}
                            />
                          </Stack>
                        }
                      />
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Timeline.Item>
            ))}
          </Timeline>
        </Stack>

        <Stack
          gap='lg'
          align={lg ? 'center' : 'flex-start'}
          w={{ base: '100%', xs: '50%' }}
        >
          <Title
            variant='heading'
            order={2}
            fz={{ base: '1.5rem', md: '3rem' }}
            ta={{ base: 'left', xs: 'center', md: 'left' }}
            style={{ transition: 'all 0.5s' }}
          >
            Personal projects
          </Title>

          <Timeline
            active={99}
            bulletSize={25}
            lineWidth={5}
            w={{ base: '100%', md: '75%' }}
          >
            {portfolio.personal.map(({ year, work }, index) => (
              <Timeline.Item key={index} title={year}>
                <Accordion
                  chevronPosition='left'
                  value={isBaseWidth ? professionalItem : personalItem}
                  onChange={(value) =>
                    isBaseWidth
                      ? setProfessionalItem(value || '')
                      : setPersonalItem(value || '')
                  }
                >
                  {work.map((job, index) => (
                    <Accordion.Item key={index} value={job.title}>
                      <Accordion.Control children={job.title} />
                      <Accordion.Panel
                        children={
                          <Stack gap='xs'>
                            {job.description}
                            <Anchor
                              children='See more details'
                              onClick={() => handleMoreDetails(job)}
                            />
                          </Stack>
                        }
                      />
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Timeline.Item>
            ))}
          </Timeline>
        </Stack>
      </Flex>
    </MainLayout>
  );
};
