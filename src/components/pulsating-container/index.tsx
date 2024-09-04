import type { ReactNode, CSSProperties } from 'react';
import NewPulse from 'components/pulsating-container/pulse';

// Reference: https://codesandbox.io/p/sandbox/pulse-animation-xz76d?file=%2Fsrc%2Fpulsating.js

type Props = {
  children: ReactNode;
  borderColor: CSSProperties['borderColor'];
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  maxLayers?: number;
  visible?: boolean;
};

export default ({ children, visible, maxLayers = 2, ...rest }: Props) => (
  <div
    data-test-id='NEW-PULSATING-DIV'
    style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '100%',
        height: '100%',
        margin: '2px .75px',
        zIndex: `${maxLayers + 1}`,
      }}
    >
      {children}
    </div>
    {visible &&
      Array.from(Array(maxLayers).keys()).map((key) => (
        <NewPulse key={key} layer={key} {...{ maxLayers, ...rest }} />
      ))}
  </div>
);
