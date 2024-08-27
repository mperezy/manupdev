import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';

export default (props: LinkProps) => (
  <Link {...props} style={{ textDecoration: 'none' }}>
    <Anchor underline='hover'>{props.children}</Anchor>
  </Link>
);
