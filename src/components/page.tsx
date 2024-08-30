import type { ReactNode } from 'react';
import { useEffect } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export default ({ title, children }: Props) => {
  useEffect(() => {
    document.title = `Manup.dev | ${title}`;
  }, [title]);

  return <>{children}</>;
};
