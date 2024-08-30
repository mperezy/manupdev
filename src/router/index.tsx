import { createBrowserRouter } from 'react-router-dom';
import routes from 'router/routes';

import Page from 'components/page';
import { Home, Portfolio, Links, Page404 } from 'pages';

export default createBrowserRouter([
  {
    path: '*',
    element: (
      <Page title='Page not found'>
        <Page404 />
      </Page>
    ),
  },
  {
    path: routes.home.path,
    index: true,
    element: (
      <Page title={routes.home.name}>
        <Home />
      </Page>
    ),
  },
  {
    path: routes.portfolio.path,
    index: true,
    element: (
      <Page title={routes.portfolio.name}>
        <Portfolio />
      </Page>
    ),
  },
  {
    path: routes.links.path,
    index: true,
    element: (
      <Page title={routes.links.name}>
        <Links />
      </Page>
    ),
  },
]);
