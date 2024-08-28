import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';

export default (props: LinkProps) => (
  <Anchor to={props.to} component={Link} underline='hover'>
    {props.children}
  </Anchor>
);
