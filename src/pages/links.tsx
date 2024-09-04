import type { ReactNode } from 'react';
import { Anchor, Flex, List, Stack, Text } from '@mantine/core';
import { useOrientation } from '@mantine/hooks';
import Heading from 'components/heading';
import Icon from 'components/icons/tech';
import MainLayout from 'components/main-layout';
import useTheme from 'hooks/use-theme';

type SocialMedia = {
  text: string;
  url: string;
  icon: ReactNode;
};

export default () => {
  const { isLightTheme } = useTheme();
  const { type: orientation } = useOrientation();

  const SOCIAL_MEDIA: SocialMedia[] = [
    {
      text: 'LinkedIn',
      url: 'http://linkedin.com/in/manuel-pérez-600322157',
      icon: <Icon name='LinkedIn' />,
    },
    {
      text: 'Github',
      url: 'https://github.com/mperezy',
      icon: <Icon name='Github' fill={!isLightTheme ? '#FFF' : undefined} />,
    },
  ];

  return (
    <MainLayout
      fullyCentered
      minHeight={orientation === 'landscape-primary' ? 'none' : ''}
    >
      <Flex
        data-test-id='LINKS_PAGE'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: '2rem', md: 'lg' }}
        align='center'
        justify='space-evenly'
      >
        <Heading width={{ base: '100%', md: '60%' }}>
          Get more about me!
        </Heading>

        <Stack w={{ base: '100%', md: '40%' }} align='center'>
          <Text
            variant='label'
            fz={{ base: 'lg', md: 'xl' }}
            style={{ transition: 'all 0.5s' }}
          >
            Follow me on:
          </Text>

          <List>
            {SOCIAL_MEDIA.map(({ text, url, icon }, index) => (
              <List.Item key={index}>
                <Flex align='center' gap='.5rem'>
                  {icon}
                  <Anchor
                    href={url}
                    target='_blank'
                    fz={{ base: 'lg', md: 'xl' }}
                    style={{ transition: 'all 0.5s' }}
                  >
                    {text}
                  </Anchor>
                </Flex>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Flex>
    </MainLayout>
  );
};
