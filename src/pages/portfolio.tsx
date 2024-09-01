import { Accordion, Anchor, Flex, Stack, Timeline, Title } from '@mantine/core';
import MainLayout from 'components/main-layout';
import portfolio from 'constants/portfolio';
import { useState } from 'react';

export default () => {
  const [professionalItem, setProfessionalItem] = useState<string>('');
  const [personalItem, setPersonalItem] = useState<string>('');

  return (
    <MainLayout fullyCentered>
      <Flex
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
                  value={personalItem}
                  onChange={(value) => setPersonalItem(value || '')}
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
