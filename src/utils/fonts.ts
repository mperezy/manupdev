import { Anton_SC, Cabin, Graduate } from 'next/font/google';

export const antonSC = Anton_SC({
  subsets: ['latin'],
  weight: '400',
});

export const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const graduate = Graduate({
  subsets: ['latin'],
  weight: '400',
});
