import { Suspense } from 'react';
import Page404 from 'components/pages/404';

export default () => (
  <Suspense fallback={null}>
    <Page404 />
  </Suspense>
);
