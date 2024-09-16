import { createBrowserRouter } from 'react-router-dom';
import { useRoutePageArray } from 'router/use-routes';

import Page from 'components/page';
import { Page404 } from 'pages';

export default () => {
  const routes = useRoutePageArray();

  return createBrowserRouter([
    {
      path: '*',
      element: (
        <Page title='not-found' withFooter={false}>
          <Page404 />
        </Page>
      ),
    },
    ...routes.map(({ path, page }) => ({
      path,
      index: true,
      element: page,
    })),
  ]);
};
