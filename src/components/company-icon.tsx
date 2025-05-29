import type { ThemeIconProps } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import Image from 'components/image';

type Props = Pick<ThemeIconProps, 'size'> & {
  company: string;
};

export default ({ company, size }: Props) => {
  const companySlug = company.toLowerCase().replaceAll(' ', '-');
  const _company = companySlug.includes('bonzzu')
    ? 'bonzzu'
    : companySlug.includes('google-drive')
      ? 'google-drive'
      : companySlug;

  return (
    <ThemeIcon color='#FFF' size={size}>
      <Image
        priority
        loading='eager'
        width={20}
        height={20}
        src={`/images/companies/${_company}.png`}
        w='83%'
        h='auto'
        alt={`${company}-logo`}
      />
    </ThemeIcon>
  );
};
