import type RouteEnum from 'router/enum';

const routes: Routes<RouteEnum> = {
  home: {
    path: '/',
    name: 'Home',
  },
  portfolio: {
    path: '/portfolio',
    name: 'Portfolio',
  },
  links: {
    path: '/links',
    name: 'Links',
  },
};

export default routes;
