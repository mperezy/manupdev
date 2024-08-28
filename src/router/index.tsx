import { createHashRouter } from 'react-router-dom';
import routes from 'router/routes';

import { Home, Portfolio } from 'pages';

export default createHashRouter([
  {
    path: '*',
    element: <div>Not found page</div>,
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
]);
