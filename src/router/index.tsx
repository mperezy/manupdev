import { createBrowserRouter } from 'react-router-dom';
import routes from 'router/routes';

import { Home, Portfolio, Links, Page404 } from 'pages';

export default createBrowserRouter([
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: routes.home.path,
    index: true,
    element: <Home />,
  },
  {
    path: routes.portfolio.path,
    index: true,
    element: <Portfolio />,
  },
  {
    path: routes.links.path,
    index: true,
    element: <Links />,
  },
]);
