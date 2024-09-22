import { MotionDiv } from 'components/animated';
import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  custom?: number;
  delay?: number;
  direction?: 'right-to-left' | 'left-to-right';
  duration?: number;
  style?: CSSProperties;
};

export default ({
  children,
  custom = 0,
  direction = 'right-to-left',
  duration = 0.5,
  delay = 0,
  style,
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
          duration,
        },
      }),
    }}
    style={style}
  >
    {children}
  </MotionDiv>
);
