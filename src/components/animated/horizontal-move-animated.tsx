import { MotionDiv } from 'components/animated';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  custom?: number;
  delay?: number;
  direction?: 'right-to-left' | 'left-to-right';
};

export default ({
  children,
  custom = 0,
  direction = 'right-to-left',
  delay = 0,
}: Props) => (
  <MotionDiv
    custom={custom}
    initial='hidden'
    animate='visible'
    variants={{
      hidden:
        direction === 'left-to-right'
          ? { opacity: 0, x: 100 }
          : { opacity: 0, x: -100 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: delay + i * 0.2,
          duration: 0.5,
        },
      }),
    }}
  >
    {children}
  </MotionDiv>
);
