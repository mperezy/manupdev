import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { MdInfoOutline, MdOutlineFolder, MdOutlineHome } from 'react-icons/md';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import navbarVerbiage from 'languages/navbar';

type RestPage = {
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
        icon: <MdOutlineHome size='1.5rem' />,
      },
      portfolio: {
        path: '/portfolio',
        name: navbar.portfolio,
        icon: <MdOutlineFolder size='1.5rem' />,
      },
      about: {
        path: '/about',
        name: navbar.about,
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
