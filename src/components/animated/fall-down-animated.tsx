import type { CSSProperties, ReactNode } from 'react';
import type { AnimationProps, MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const itemVariants: AnimationProps['variants'] = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

type Props = MotionProps & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default ({
  children,
  transition = { duration: 0.5 },
  ...rest
}: Props) => (
  <MotionDiv {...{ ...rest, transition }} variants={itemVariants}>
    {children}
  </MotionDiv>
);

export const ParentWrapper = ({ children, style, ...rest }: Props) => (
  <MotionDiv
    {...rest}
    variants={{
      hidden: {
        opacity: 1,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      },
    }}
    initial='hidden'
    animate='visible'
    style={style}
  >
    {children}
  </MotionDiv>
);
