import type { ReactNode } from 'react';
import { MdOutlineHome, MdOutlineFolder } from 'react-icons/md';
import useRoutes from 'router/use-routes';

type Route = {
  href: Path;
  title: string;
  icon: ReactNode;
};

export default (): Route[] => {
  const routes = useRoutes();

  return [
    {
      href: routes.home.path,
      title: routes.home.name,
      icon: <MdOutlineHome size='1.5rem' />,
    },
    {
      href: routes.portfolio.path,
      title: routes.portfolio.name,
      icon: <MdOutlineFolder size='1.5rem' />,
    },
    // {
    //   href: routes.links.path,
    //   title: routes.links.name,
    //   icon: <MdOutlineLink size='1.5rem' />,
    // },
  ];
};
