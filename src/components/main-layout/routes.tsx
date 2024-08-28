import type { ReactNode } from 'react';
import { MdOutlineHome, MdOutlineFolder } from 'react-icons/md';

export type Path = '/' | '/portfolio';

type Route = {
  href: Path;
  title: string;
  icon: ReactNode;
};

const routes: Route[] = [
  {
    href: '/',
    title: 'Home',
    icon: <MdOutlineHome size='1.5rem' />,
  },
  {
    href: '/portfolio',
    title: 'Portfolio',
    icon: <MdOutlineFolder size='1.5rem' />,
  },
];

export default routes;
