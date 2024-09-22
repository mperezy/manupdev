import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { MdInfoOutline, MdOutlineFolder, MdOutlineHome } from 'react-icons/md';
import Page from 'components/page';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import navbarVerbiage from 'languages/navbar';
import { Home, About, Portfolio } from 'pages';

type RestPage = {
  page: ReactNode;
  icon: ReactNode;
};

type RoutePageObject = Partial<Routes<RouteEnum, RestPage>>;
type RoutePageArray = RouteI<RestPage>[];

const useRoutePage = (): RoutePageObject => {
  const navbar = useLanguageVerbiage(navbarVerbiage);

  return useMemo(
    () => ({
      home: {
        path: '/',
        name: navbar.home,
        page: (
          <Page title='home'>
            <Home />
          </Page>
        ),
        icon: <MdOutlineHome size='1.5rem' />,
      },
      portfolio: {
        path: '/portfolio',
        name: navbar.portfolio,
        page: (
          <Page title='portfolio'>
            <Portfolio />
          </Page>
        ),
        icon: <MdOutlineFolder size='1.5rem' />,
      },
      about: {
        path: '/about',
        name: navbar.about,
        page: (
          <Page title='about'>
            <About />
          </Page>
        ),
        icon: <MdInfoOutline size='1.5rem' />,
      },
    }),
    [navbar]
  );
};

export default (): RoutePageObject => useRoutePage();

export const useRoutePageArray = (): RoutePageArray => {
  const routePage = useRoutePage();

  return Object.values(routePage);
};
