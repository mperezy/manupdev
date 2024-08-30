import type { ReactNode } from 'react';
import { MdOutlineHome, MdOutlineFolder, MdOutlineLink } from 'react-icons/md';
import routesObj from 'router/routes';

type Route = {
  href: Path;
  title: string;
  icon: ReactNode;
};

const routes: Route[] = [
  {
    href: routesObj.home.path,
    title: routesObj.home.name,
    icon: <MdOutlineHome size='1.5rem' />,
  },
  {
    href: routesObj.portfolio.path,
    title: routesObj.portfolio.name,
    icon: <MdOutlineFolder size='1.5rem' />,
  },
  {
    href: routesObj.links.path,
    title: routesObj.links.name,
    icon: <MdOutlineLink size='1.5rem' />,
  },
];

export default routes;
