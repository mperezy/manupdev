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
};

export default routes;
