/* eslint-disable max-len */

import type { SVGProps } from 'react';

export default ({ width = 20, height = 20 }: SVGProps<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    clipRule='evenodd'
    fillRule='evenodd'
    width={width} // '2500'
    height={height} // '2500'
    strokeLinejoin='round'
    strokeMiterlimit='2'
    viewBox='-.00220702 -.00220702 50.00441404 50.00441404'
  >
    <path
      d='m50 6.902a6.906 6.906 0 0 0 -6.902-6.902h-36.196a6.906 6.906 0 0 0 -6.902 6.902v36.196a6.906 6.906 0 0 0 6.902 6.902h36.196a6.906 6.906 0 0 0 6.902-6.902z'
      fill='#ffd228'
    />
    <path
      d='m28.808 23.119h7.073l-10.881 10.88-10.881-10.879h7.073v-11.12h7.616zm-20.308 13.881h33v2h-33z'
      fill='#e42815'
    />
  </svg>
);
