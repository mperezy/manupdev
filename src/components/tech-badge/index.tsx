import { Badge } from '@mantine/core';
import TechIcon from 'components/icons/tech';
import colors from 'components/tech-badge/colors';
import useTheme from 'hooks/use-theme';

type Props = {
  techName: Tech;
};

export default ({ techName }: Props) => {
  const { isLightTheme } = useTheme();
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
        color: isLightTheme
          ? color.textColor
          : color.darkTextColor
            ? color.darkTextColor
            : color.textColor,
        borderColor: color.borderColor ?? 'transparent',
        textTransform: 'none',
        alignItems: 'center',
      }}
    >
      {techName}
    </Badge>
  );
};
