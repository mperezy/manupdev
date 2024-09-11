import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AppShell,
  Burger,
  Divider,
  em,
  Flex,
  NavLink,
  Stack,
  Title,
} from '@mantine/core';
import {
  useHotkeys,
  useLocalStorage,
  useMediaQuery,
  useOs,
} from '@mantine/hooks';
import { HoverAnimated } from 'components/animated';
import useNavbarRoutes from 'components/main-layout/use-navbar-routes';
import NavbarMenu from 'components/navbar-menu';
import PopoverHint from 'components/popover-hint';
import useTheme from 'hooks/use-theme';

type Props = {
  children: ReactNode;
  fullyCentered?: boolean;
};

export default ({ children, fullyCentered }: Props) => {
  const routes = useNavbarRoutes();
  const { pathname: route } = useLocation();
  const os = useOs();
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
              // eslint-disable-next-line max-len
              text={`${navbarOpened ? 'Close' : 'Open'} navigation bar - ${os === 'macos' ? '⌘' : 'Ctrl'} + B`}
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

          <NavbarMenu />
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
              <HoverAnimated active={href === route}>
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
              </HoverAnimated>
              {index < arr.length - 1 && (
                <Divider color={isLightTheme ? '#CDCDCD' : '#424242'} />
              )}
            </Stack>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main
        display='flex'
        w='100%'
        pt='var(--app-shell-header-height)'
        style={{ justifyContent: 'center' }}
      >
        <Flex
          w='100%'
          maw='95rem'
          align={fullyCentered ? 'center' : 'flex-start'}
          p='2.15rem'
        >
          {children}
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};
