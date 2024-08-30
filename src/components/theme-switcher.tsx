import { ActionIcon } from '@mantine/core';
import { MdOutlineNightlight, MdOutlineWbSunny } from 'react-icons/md';
import PopoverHint from 'components/popover-hint';
import useTheme from 'hooks/use-theme';

export default () => {
  const { isLightTheme, handleToggleColorTheme } = useTheme();

  return (
    <PopoverHint
      text={`Switch to ${isLightTheme ? 'dark' : 'light'} mode - mod+J`}
    >
      <ActionIcon
        variant='theme-toggler'
        size='lg'
        bg={isLightTheme ? '#F5F5F5' : '#4E4E4E'}
        onClick={handleToggleColorTheme}
      >
        {isLightTheme ? (
          <MdOutlineNightlight
            color={isLightTheme ? '#000' : '#FFF'}
            style={{ transform: 'rotate(327deg)' }}
          />
        ) : (
          <MdOutlineWbSunny color={isLightTheme ? '#000' : '#FFF'} />
        )}
      </ActionIcon>
    </PopoverHint>
  );
};
