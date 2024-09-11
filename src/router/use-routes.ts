import useNavbar from 'hooks/language/use-navbar';
import type RouteEnum from 'router/enum';

export default (): Routes<RouteEnum> => {
  const navbar = useNavbar();

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
