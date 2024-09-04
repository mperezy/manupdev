import type { ElementType, ReactNode } from 'react';
import type { TitleProps } from '@mantine/core';
import { Title } from '@mantine/core';

type HeadingProps = {
  as?: ElementType;
  color?: TitleProps['c'];
  children: ReactNode;
  fontWeight?: TitleProps['fw'];
  width?: TitleProps['w'];
};

export default ({ as, color, children, fontWeight, width }: HeadingProps) => (
  <Title
    variant='heading'
    order={1}
    w={width}
    fz={{ base: '2rem', md: '5rem' }}
    ta={{ base: 'center', md: 'left' }}
    c={color}
    component={as}
    fw={fontWeight}
    style={{ transition: 'all 0.5s' }}
  >
    {children}
  </Title>
);
