import type { ReactNode } from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { usePathname } from 'next/navigation';
import Footer from 'components/footer';
import useRoutes from 'router/use-routes';
import { useLanguageState } from 'store/language-atom';
import isProd from 'utils/is-prod';

const MANUP_DEV = 'manup.dev';

type Props = {
  title: RouteEnum | 'not-found';
  children: ReactNode;
  withFooter?: boolean;
};

export default ({ title, children, withFooter = true }: Props) => {
  const pathname = usePathname();
  const language = useLanguageState();
  const routes = useRoutes();

  useEffect(() => {
    if (isProd()) {
      ReactGA.send({
        hitType: 'pageView',
        page: pathname,
      });
    }
  }, []);

  useEffect(() => {
    if (title === 'not-found') {
      const title =
        language === 'EN' ? 'Page not found' : 'Página no encontrada';
      document.title = `${MANUP_DEV} | ${title}`;

      return;
    }

    document.title = `${MANUP_DEV} | ${routes[title]?.name}`;
  }, [language, title]);

  return (
    <>
      {children}
      {withFooter && <Footer />}
    </>
  );
};
