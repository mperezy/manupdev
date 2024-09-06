import type { CSSProperties, ReactNode } from 'react';
import { MotionDiv } from 'components/animated';

type Props = {
  children: ReactNode;
  scaleOut?: number;
  delay?: number;
  style?: CSSProperties;
};

export default ({ children, scaleOut = 1, delay, ...rest }: Props) => (
  <MotionDiv
    initial={{ scale: 0 }}
    animate={{ scale: scaleOut }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    {...rest}
  >
    {children}
  </MotionDiv>
);
