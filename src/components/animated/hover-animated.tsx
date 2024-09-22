import type { TargetAndTransition } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { MotionDiv } from 'components/animated';

type Props = {
  active?: boolean;
  activeWithMarginTop?: boolean;
  children: ReactNode;
  scaleOut?: number;
  whileHover?: TargetAndTransition;
  style?: CSSProperties;
};

export default ({
  children,
  active,
  activeWithMarginTop,
  scaleOut = 1.04,
  whileHover,
  style = { width: '100%' },
}: Props) => (
  <MotionDiv
    animate={{
      scale: active ? scaleOut : 1,
      marginTop: active && activeWithMarginTop ? '1rem' : 0,
    }}
    whileHover={{ ...whileHover, scale: scaleOut }}
    style={style}
  >
    {children}
  </MotionDiv>
);
