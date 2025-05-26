import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { AnchorProps } from '@mantine/core';
import { Anchor } from '@mantine/core';

type Props = LinkProps &
  AnchorProps & {
    children: ReactNode;
  };

export default (props: Props) => (
  <Anchor {...props} href={props.href} component={Link} underline='hover'>
    {props.children}
  </Anchor>
);
