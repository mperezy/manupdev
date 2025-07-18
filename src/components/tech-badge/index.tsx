import { Badge } from '@mantine/core';
import TechIcon from 'components/icons/tech';
import colors from 'components/tech-badge/colors';
import useTheme from 'hooks/use-theme';

type IconSize = {
  height: number;
  width: number;
};

type Props = {
  techName: Tech;
};

export default ({ techName }: Props) => {
  const { isLightTheme } = useTheme();
  const color = colors[techName] ?? {
    background: 'transparent',
    borderColor: '#000',
    textColor: '#000',
    darkTextColor: '#FFF',
  };

  const iconSize: IconSize =
    techName === 'Go'
      ? {
          height: 20,
          width: 20,
        }
      : {
          height: 17,
          width: 17,
        };

  return (
    <Badge
      autoContrast
      display='flex'
      radius='md'
      leftSection={
        <TechIcon
          name={techName}
          width={iconSize.width}
          height={iconSize.height}
        />
      }
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
