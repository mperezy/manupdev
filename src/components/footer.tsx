import {
  Anchor,
  Box,
  Flex,
  RemoveScroll,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import TechIcon from 'components/icons/tech';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useTheme from 'hooks/use-theme';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import footerVerbiage from 'languages/footer';

const techs: Tech[] = ['React.js', 'Typescript', 'Vite', 'Mantine'];

export default () => {
  const HEIGHT = '15rem';
  const { isLightTheme } = useTheme();
  const [navbarOpened] = useLocalStorage({
    key: 'navbar-opened',
  });
  const { md } = useWidthBreakpoints();
  const footer = useLanguageVerbiage(footerVerbiage);

  return (
    <Box>
      <Box h={HEIGHT} />
      <Box
        h={HEIGHT}
        ml={navbarOpened ? 'var(--app-shell-navbar-width)' : 0}
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
        >
          <Text>
            {footer.madeWith[0]} ❤️ {footer.madeWith[1]}{' '}
            <Text component='span' fw='bolder'>
              <Anchor
                href='http://linkedin.com/in/manuel-pérez-600322157'
                target='_blank'
                style={{ transition: 'all 0.5s', textDecoration: 'none' }}
              >
                Manu Perez
              </Anchor>
            </Text>{' '}
            © {new Date().getFullYear()}
          </Text>

          <Stack align={md ? 'flex-start' : 'center'} gap='sm'>
            <Text component='span'>{footer.builtWith}:</Text>
            <Flex gap='md' style={{ flexWrap: 'wrap' }}>
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
