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
import portfolio from 'constants/portfolio';

export default () => {
  const isBaseWidth = useMediaQuery(`(max-width: ${em(425)})`);
  const [professionalItem, setProfessionalItem] = useState<string>('');
  const [personalItem, setPersonalItem] = useState<string>('');

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
        <Stack gap='lg' w={{ base: '100%', xs: '50%' }}>
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
                  {work.map(({ title, description }, index) => (
                    <Accordion.Item key={index} value={title}>
                      <Accordion.Control children={title} />
                      <Accordion.Panel
                        children={
                          <Stack gap='xs'>
                            {description}
                            <Anchor children='See more details' />
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

        <Stack gap='lg' w={{ base: '100%', xs: '50%' }}>
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
                  {work.map(({ title, description }, index) => (
                    <Accordion.Item key={index} value={title}>
                      <Accordion.Control children={title} />
                      <Accordion.Panel
                        children={
                          <Stack gap='xs'>
                            {description}
                            <Anchor children='See more details' />
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
