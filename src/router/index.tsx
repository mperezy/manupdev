import { createBrowserRouter } from 'react-router-dom';
import useRoutes from 'router/use-routes';

import Page from 'components/page';
import { Home, Portfolio, Links, Page404 } from 'pages';

export default () => {
  const routes = useRoutes();

  return createBrowserRouter([
    {
      path: '*',
      element: (
        <Page title='not-found' withFooter={false}>
          <Page404 />
        </Page>
      ),
    },
    {
      path: routes.home.path,
      index: true,
      element: (
        <Page title='home'>
          <Home />
        </Page>
      ),
    },
    {
      path: routes.portfolio.path,
      index: true,
      element: (
        <Page title='portfolio'>
          <Portfolio />
        </Page>
      ),
    },
    {
      path: routes.links.path,
      index: true,
      element: (
        <Page title='links'>
          <Links />
        </Page>
      ),
    },
  ]);
};
