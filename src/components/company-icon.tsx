import type { ThemeIconProps } from '@mantine/core';
import { Image, ThemeIcon } from '@mantine/core';

type Props = Pick<ThemeIconProps, 'size'> & {
  company: string;
};

export default ({ company, size }: Props) => {
  const companySlug = company.toLowerCase().replaceAll(' ', '-');
  const _company = companySlug.includes('bonzzu') ? 'bonzzu' : companySlug;

  return (
    <ThemeIcon color='#FFF' size={size}>
      <Image src={`images/companies/${_company}.png`} w='83%' />
    </ThemeIcon>
  );
};
