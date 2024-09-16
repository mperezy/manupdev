import type { ReactNode } from 'react';
import { MdOutlineArrowUpward } from 'react-icons/md';
import { useLocation, Link } from 'react-router-dom';
import {
  ActionIcon,
  Affix,
  AppShell,
  Burger,
  Divider,
  em,
  Flex,
  NavLink,
  Stack,
  Title,
  Transition,
} from '@mantine/core';
import {
  useHotkeys,
  useLocalStorage,
  useMediaQuery,
  useOs,
  useWindowScroll,
} from '@mantine/hooks';
import NavbarMenu from 'components/navbar-menu';
import PopoverHint from 'components/popover-hint';
import useTheme from 'hooks/use-theme';
import { useRoutePageArray } from 'router/use-routes';

type Props = {
  children: ReactNode;
  fullyCentered?: boolean;
};

export default ({ children, fullyCentered }: Props) => {
  const routes = useRoutePageArray();
  const { pathname: route } = useLocation();
  const os = useOs();
  const [scroll, scrollTo] = useWindowScroll();
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
              <Link
                to='/public'
                style={{ color: '#E7E7E7', textDecoration: 'none' }}
              >
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
          {routes.map(({ path, name, icon }, index, arr) => (
            <Stack gap='xs' key={index}>
              <NavLink
                active={path === route}
                component={Link}
                to={path}
                label={name}
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
        display='flex'
        w='100%'
        pt='var(--app-shell-header-height)'
        pos='relative'
        style={{ justifyContent: 'center', zIndex: 20 }}
      >
        <Flex
          w='100%'
          maw='95rem'
          align={fullyCentered ? 'center' : 'flex-start'}
          p='2.15rem'
        >
          {children}
        </Flex>
        <Affix position={{ bottom: 20, right: 20 }} style={{ zIndex: 20 }}>
          <Transition transition='scale' mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <ActionIcon
                style={transitionStyles}
                radius='xl'
                size='xl'
                onClick={() => scrollTo({ y: 0 })}
              >
                <MdOutlineArrowUpward size='1.3rem' />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </AppShell.Main>
    </AppShell>
  );
};
