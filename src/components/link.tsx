import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { AnchorProps } from '@mantine/core';
import { Anchor } from '@mantine/core';

type Props = LinkProps & Omit<AnchorProps, 'to'>;

export default (props: Props) => (
  <Anchor {...props} to={props.to} component={Link} underline='hover'>
    {props.children}
  </Anchor>
);
