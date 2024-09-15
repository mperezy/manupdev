import type { ReactNode } from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import Footer from 'components/footer';
import type RouteEnum from 'router/enum';
import useRoutes from 'router/use-routes';
import { useLanguageState } from 'store/language-atom';

type Props = {
  title: keyof typeof RouteEnum | 'not-found';
  children: ReactNode;
  withFooter?: boolean;
};

export default ({ title, children, withFooter = true }: Props) => {
  const location = useLocation();
  const language = useLanguageState();
  const routes = useRoutes();

  useEffect(() => {
    if (import.meta.env.PROD) {
      ReactGA.send({
        hitType: 'pageView',
        page: location.pathname,
      });
    }
  }, []);

  useEffect(() => {
    if (title === 'not-found') {
      const title =
        language === 'EN' ? 'Page not found' : 'Página no encontrada';
      document.title = `Manup.dev | ${title}`;

      return;
    }

    document.title = `Manup.dev | ${routes[title].name}`;
  }, [language, title]);

  return (
    <>
      {children}
      {withFooter && <Footer />}
    </>
  );
};
