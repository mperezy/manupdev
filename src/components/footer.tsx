import type { ReactNode } from 'react';
import {
  Anchor,
  Box,
  Divider,
  Flex,
  RemoveScroll,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { HoverAnimated } from 'components/animated';
import TechIcon from 'components/icons/tech';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useTheme from 'hooks/use-theme';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import footerVerbiage from 'languages/footer';

type SocialMedia = {
  url: string;
  icon: ReactNode;
};

const MOBILE_HEIGHT = '23rem';
const HEIGHT = '15rem';
const techs: Tech[] = ['React.js', 'Typescript', 'Vite', 'Mantine'];

export default () => {
  const { isLightTheme } = useTheme();
  const [navbarOpened] = useLocalStorage({
    key: 'navbar-opened',
  });
  const { base, md } = useWidthBreakpoints();
  const footer = useLanguageVerbiage(footerVerbiage);

  const SOCIAL_MEDIA: SocialMedia[] = [
    {
      url: 'http://linkedin.com/in/manuel-pérez-600322157',
      icon: <TechIcon name='LinkedIn' />,
    },
    {
      url: 'https://github.com/mperezy',
      icon: (
        <TechIcon name='Github' fill={!isLightTheme ? '#FFF' : undefined} />
      ),
    },
  ];

  return (
    <Box>
      <Box h={{ base: MOBILE_HEIGHT, md: HEIGHT }} />
      <Box
        h={{ base: MOBILE_HEIGHT, md: HEIGHT }}
        ml={base ? 0 : navbarOpened ? 'var(--app-shell-navbar-width)' : 0}
        className={RemoveScroll.classNames.fullWidth}
        style={{
          background: isLightTheme ? '#F5F5F5' : '#282828',
          position: 'fixed',
          zIndex: 3,
          bottom: 0,
          left: 0,
          right: 0,
          transition: 'ease 200ms',
        }}
      >
        <Flex
          w='100%'
          h='100%'
          p='xl'
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='space-evenly'
          gap='lg'
        >
          <Stack align='center'>
            <Text>
              {footer.madeWith[0]} ❤️ {footer.madeWith[1]}{' '}
              <Text component='span' fw='bolder'>
                <Anchor
                  target='_blank'
                  style={{ transition: 'all 0.5s', textDecoration: 'none' }}
                >
                  Manu Perez
                </Anchor>
              </Text>{' '}
              © {new Date().getFullYear()}
            </Text>

            <Stack gap='sm'>
              <Title variant='heading' order={5}>
                {footer.getMore}:
              </Title>

              <Flex align='center' justify='center' gap='sm'>
                {SOCIAL_MEDIA.map(({ url, icon }, index) => (
                  <HoverAnimated
                    key={index}
                    scaleOut={1.25}
                    style={{ width: 'unset' }}
                  >
                    <Anchor href={url} target='_blank'>
                      {icon}
                    </Anchor>
                  </HoverAnimated>
                ))}
              </Flex>
            </Stack>
          </Stack>

          <Divider
            size='sm'
            w={md ? 'unset' : 'inherit'}
            orientation={md ? 'vertical' : 'horizontal'}
          />

          <Stack align='center' gap='sm'>
            <Text component='span'>{footer.builtWith}:</Text>
            <Flex gap='md' justify='center' style={{ flexWrap: 'wrap' }}>
              {techs.map((tech, index) => (
                <Flex key={index} align='center' gap='.3rem'>
                  <TechIcon name={tech} />

                  <Title component='span' fw='bolder' order={6}>
                    {tech}
                  </Title>
                </Flex>
              ))}
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
