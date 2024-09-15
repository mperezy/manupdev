import type { ReactNode } from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { Anchor, Flex, List, Stack, Text } from '@mantine/core';
import {
  FallDownAnimated,
  HoverAnimated,
  ScaleOutAnimated,
} from 'components/animated';
import Heading from 'components/heading';
import Icon from 'components/icons/tech';
import MainLayout from 'components/main-layout';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useTheme from 'hooks/use-theme';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import linksPageVerbiage from 'languages/links-page';

type SocialMedia = {
  text: string;
  url: string;
  icon: ReactNode;
};

export default () => {
  const linksPage = useLanguageVerbiage(linksPageVerbiage);
  const { isLightTheme } = useTheme();
  const { md } = useWidthBreakpoints();

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
    <MainLayout fullyCentered>
      <Flex
        data-test-id='LINKS_PAGE'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: '2rem', md: 'lg' }}
        align='center'
        justify='space-evenly'
      >
        <ScaleOutAnimated style={{ width: md ? '60%' : '100%' }}>
          <Heading>{linksPage.getMore}</Heading>
        </ScaleOutAnimated>

        <Stack w={{ base: '100%', md: '40%' }} align='center'>
          <ScaleOutAnimated delay={0.5}>
            <Text
              variant='label'
              fz={{ base: 'lg', md: 'xl' }}
              style={{ transition: 'all 0.5s' }}
            >
              {linksPage.followMe}
            </Text>
          </ScaleOutAnimated>

          <List>
            {SOCIAL_MEDIA.map(({ text, url, icon }, index) => (
              <FallDownAnimated
                key={index}
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.2,
                }}
              >
                <List.Item>
                  <HoverAnimated scaleOut={1.07}>
                    <Flex align='center' gap='.5rem'>
                      {icon}
                      <Anchor
                        href={url}
                        target='_blank'
                        fz={{ base: 'lg', md: 'xl' }}
                        style={{ transition: 'all 0.5s' }}
                      >
                        <Flex align='center' gap='.25rem'>
                          {text}{' '}
                          <TbExternalLink
                            size='1rem'
                            style={{ position: 'relative' }}
                          />
                        </Flex>
                      </Anchor>
                    </Flex>
                  </HoverAnimated>
                </List.Item>
              </FallDownAnimated>
            ))}
          </List>
        </Stack>
      </Flex>
    </MainLayout>
  );
};
