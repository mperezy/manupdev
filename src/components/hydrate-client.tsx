import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

type Props = { children: ReactNode };

export default ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};
