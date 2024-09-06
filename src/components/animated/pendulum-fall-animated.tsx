import type { CSSProperties, ReactNode } from 'react';
import { MotionDiv } from 'components/animated';

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default ({ children, ...rest }: Props) => (
  <MotionDiv
    initial='hidden'
    animate='visible'
    variants={{
      hidden: { rotate: -15, x: -100, opacity: 0 },
      visible: {
        rotate: [15, -10, 5, 0],
        x: 0,
        opacity: 1,
        transition: { duration: 1, type: 'spring', stiffness: 50, delay: 0.5 },
      },
    }}
    {...rest}
  >
    {children}
  </MotionDiv>
);
