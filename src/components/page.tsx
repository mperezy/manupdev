import type { ReactNode } from 'react';
import { useEffect } from 'react';
import type RouteEnum from 'router/enum';
import useRoutes from 'router/use-routes';
import { useLanguageState } from 'store/language-atom';

type Props = {
  title: keyof typeof RouteEnum | 'not-found';
  children: ReactNode;
};

export default ({ title, children }: Props) => {
  const language = useLanguageState();
  const routes = useRoutes();

  useEffect(() => {
    if (title === 'not-found') {
      const title =
        language === 'EN' ? 'Page not found' : 'Página no encontrada';
      document.title = `Manup.dev | ${title}`;

      return;
    }

    document.title = `Manup.dev | ${routes[title].name}`;
  }, [language, title]);

  return <>{children}</>;
};
