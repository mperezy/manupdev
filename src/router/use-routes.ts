import useLanguageVerbiage from 'hooks/use-language-verbiage';
import navbarVerbiage from 'languages/navbar';
import type RouteEnum from 'router/enum';

export default (): Routes<RouteEnum> => {
  const navbar = useLanguageVerbiage(navbarVerbiage);

  return {
    home: {
      path: '/',
      name: navbar.home,
    },
    portfolio: {
      path: '/portfolio',
      name: navbar.portfolio,
    },
    links: {
      path: '/links',
      name: navbar.links,
    },
  };
};
