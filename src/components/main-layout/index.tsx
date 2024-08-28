import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AppShell,
  Burger,
  Center,
  Divider,
  em,
  Flex,
  NavLink,
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
};

export default ({ children }: Props) => {
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
        breakpoint: 'sm',
        collapsed: { mobile: !navbarOpened, desktop: !navbarOpened },
      }}
    >
      <AppShell.Header>
        <Flex h='100%' align='center' justify='space-between' px='2rem'>
          <Flex align='center' gap='.5rem'>
            <PopoverHint text='⌘ + B'>
              <Burger
                color='#FFF'
                opened={navbarOpened}
                onClick={() => setNavbarOpened((prevState) => !prevState)}
              />
            </PopoverHint>
          </Flex>

          <Flex align='center' gap='lg'>
            <Title order={2}>manup.dev</Title>
            <ThemeSwitcher />
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar
        px='md'
        py='xl'
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

      <AppShell.Main maw='75em'>
        <Flex w='100%' justify='center'>
          <Center h='100vh' px={{ base: 'md' }} pb={{ base: 'md' }}>
            {children}
          </Center>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};
