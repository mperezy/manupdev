import type { CSSProperties } from 'react';
import styles from 'components/pulsating-container/styles.module.css';

type Props = {
  borderColor: CSSProperties['borderColor'];
  borderRadius?: CSSProperties['borderRadius'];
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  layer?: number;
  maxLayers: number;
};

export default ({
  borderColor,
  borderRadius = '.5rem',
  height = '100%',
  width = '100%',
  layer = 0,
  maxLayers,
}: Props) => (
  <div
    className={layer ? styles['pulse-animation'] : styles['scale-animation']}
    style={{
      background: 'transparent',
      borderRadius,
      border: `1px solid ${borderColor}`,
      width: `calc(${width} + ${layer * 8}px)`,
      height: `calc(${height} + ${layer * 8}px)`,
      position: 'absolute',
      zIndex: `${maxLayers - layer}`,
    }}
  />
);
