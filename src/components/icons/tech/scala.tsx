/* eslint-disable max-len */

import type { SVGProps } from 'react';

export default ({ width = 20, height = 20 }: SVGProps<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={width} // '256'
    height={height} // '416'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 416'
  >
    <linearGradient id='a' x1='0%' x2='100%' y1='50%' y2='50%'>
      <stop offset='0' stopColor='#4f4f4f' />
      <stop offset='1' />
    </linearGradient>
    <linearGradient id='b' x1='0%' x2='100%' y1='50%' y2='50%'>
      <stop offset='0' stopColor='#c40000' />
      <stop offset='1' stopColor='#f00' />
    </linearGradient>
    <path
      d='m0 288v-32c0-5.393778 116.376889-14.428444 192.199111-32 36.629333 8.490667 63.800889 18.968889 63.800889 32v32c0 13.024-27.171556 23.509333-63.800889 32-75.822222-17.575111-192.199111-26.609778-192.199111-32'
      fill='url(#a)'
      transform='matrix(1 0 0 -1 0 544)'
    />
    <path
      d='m0 160v-32c0-5.393778 116.376889-14.428444 192.199111-32 36.629333 8.490667 63.800889 18.968889 63.800889 32v32c0 13.024-27.171556 23.509333-63.800889 32-75.822222-17.575111-192.199111-26.609778-192.199111-32'
      fill='url(#a)'
      transform='matrix(1 0 0 -1 0 288)'
    />
    <g fill='url(#b)'>
      <path
        d='m0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64'
        transform='matrix(1 0 0 -1 0 416)'
      />
      <path
        d='m0 96v-96c0 8 256 24 256 64v96c0-40-256-56-256-64'
        transform='matrix(1 0 0 -1 0 160)'
      />
      <path
        d='m0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64'
        transform='matrix(1 0 0 -1 0 672)'
      />
    </g>
  </svg>
);
