import { useMediaQuery } from '@mantine/hooks';

export default () => {
  const xs = useMediaQuery('(min-width: 36em)');
  const sm = useMediaQuery('(min-width: 48em)');
  const md = useMediaQuery('(min-width: 62em)');
  const lg = useMediaQuery('(min-width: 75em)');
  const xl = useMediaQuery('(min-width: 88em)');
  const base = !xs && !sm && !md && !lg && !xl;

  return {
    base,
    xs,
    sm,
    md,
    lg,
    xl,
  };
};
