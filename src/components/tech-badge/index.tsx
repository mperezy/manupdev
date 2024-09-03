import { Badge } from '@mantine/core';
import TechIcon from 'components/icons/tech';
import colors from 'components/tech-badge/colors';

type Props = {
  techName: Tech;
};

export default ({ techName }: Props) => {
  const color = colors[techName];

  return (
    <Badge
      autoContrast
      display='flex'
      radius='md'
      leftSection={<TechIcon name={techName} width={17} height={17} />}
      size='lg'
      style={{
        background: color.background,
        color: color.textColor,
        borderColor: color.borderColor ?? 'transparent',
        textTransform: 'none',
        alignItems: 'center',
      }}
    >
      {techName}
    </Badge>
  );
};
