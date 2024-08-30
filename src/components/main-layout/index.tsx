import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AppShell,
  Burger,
  Divider,
  em,
  Flex,
  NavLink,
  Select,
  Stack,
  Title,
} from '@mantine/core';
import { useHotkeys, useLocalStorage, useMediaQuery } from '@mantine/hooks';
import routes from 'components/main-layout/routes';
import PopoverHint from 'components/popover-hint';
import ThemeSwitcher from 'components/theme-switcher';
import useTheme from 'hooks/use-theme';

type Props = {
  children: ReactNode;
  fullyCentered?: boolean;
};

export default ({ children, fullyCentered }: Props) => {
  const { pathname: route } = useLocation();
  const { isLightTheme, handleToggleColorTheme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const [navbarOpened, setNavbarOpened] = useLocalStorage({
    key: 'navbar-opened',
    getInitialValueInEffect: false,
    defaultValue: false,
  });

  useHotkeys([['mod+J', handleToggleColorTheme]]);
  useHotkeys([['mod+B', () => setNavbarOpened((prevState) => !prevState)]]);

  return (
    <AppShell
      header={{ height: '4rem' }}
      navbar={{
        width: '15rem',
        breakpoint: 'xs',
        collapsed: { mobile: !navbarOpened, desktop: !navbarOpened },
      }}
    >
      <AppShell.Header>
        <Flex h='100%' align='center' justify='space-between' px='2rem'>
          <Flex align='center' gap='lg'>
            <PopoverHint
              text={`${navbarOpened ? 'Close' : 'Open'} navigation bar - ⌘ + B`}
            >
              <Burger
                color='#FFF'
                opened={navbarOpened}
                onClick={() => setNavbarOpened((prevState) => !prevState)}
              />
            </PopoverHint>

            <PopoverHint text='Go to home'>
              <Link to='/' style={{ color: '#E7E7E7', textDecoration: 'none' }}>
                <Title order={2}>manup.dev</Title>
              </Link>
            </PopoverHint>
          </Flex>

          <Flex align='center' gap='lg'>
            <ThemeSwitcher />
            <Select
              w='5rem'
              defaultValue='ES'
              placeholder='Language'
              data={['EN', 'ES']}
            />
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar
        px='md'
        py='xl'
        w={{ base: '100%', xs: '15rem', sm: '15rem' }}
        style={{ justifyContent: 'space-between' }}
      >
        <Stack gap='xs'>
          {routes.map(({ href, title, icon }, index, arr) => (
            <Stack gap='xs' key={index}>
              <NavLink
                // data-active={href === route}
                active={href === route}
                component={Link}
                to={href}
                label={title}
                leftSection={icon}
                py='sm'
                style={{ borderRadius: '.5rem' }}
                onClick={() => {
                  if (isMobile) {
                    setNavbarOpened(false);
                  }
                }}
              />
              {index < arr.length - 1 && (
                <Divider color={isLightTheme ? '#CDCDCD' : '#424242'} />
              )}
            </Stack>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main
        w='100%'
        pt={0}
        mt='var(--app-shell-header-height)'
        mih='calc(100dvh - var(--app-shell-header-height))'
        h='calc(100dvh - var(--app-shell-header-height))'
      >
        <Flex
          p={{ base: 'md', md: 'xl' }}
          w='100%'
          h={fullyCentered ? '100%' : 'auto'}
          align={fullyCentered ? 'center' : 'flex-start'}
          justify='center'
          style={{ overflow: 'auto' }}
        >
          <Flex w='100%' maw='95rem' justify='center'>
            {children}
          </Flex>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};
