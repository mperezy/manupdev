import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineNightlight, MdOutlineWbSunny } from 'react-icons/md';
import { ActionIcon, Flex, Menu, Select } from '@mantine/core';
import ThemeSwitcher from 'components/theme-switcher';
import useTheme from 'hooks/use-theme';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';

export default () => {
  const { isLightTheme, handleToggleColorTheme } = useTheme();
  const breakpoint = useWidthBreakpoints();

  if (breakpoint.base) {
    return (
      <Menu shadow='lg' closeOnItemClick={false}>
        <Menu.Target>
          <ActionIcon bg={'transparent'}>
            <BsThreeDotsVertical size='1.25rem' color='#FFF' />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            component='div'
            rightSection={
              isLightTheme ? (
                <MdOutlineNightlight
                  color={isLightTheme ? '#000' : '#FFF'}
                  style={{ transform: 'rotate(327deg)' }}
                />
              ) : (
                <MdOutlineWbSunny color={isLightTheme ? '#000' : '#FFF'} />
              )
            }
            onClick={handleToggleColorTheme}
            style={{ justifyContent: 'center' }}
          >
            {`Switch to ${isLightTheme ? 'dark' : 'light'} mode`}
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item
            component='div'
            rightSection={
              <Select
                w='5rem'
                defaultValue='ES'
                placeholder='Language'
                data={['EN', 'ES']}
              />
            }
          >
            Language
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }

  return (
    <Flex align='center' gap='lg'>
      <ThemeSwitcher />
      <Select
        w='5rem'
        defaultValue='ES'
        placeholder='Language'
        data={['EN', 'ES']}
      />
    </Flex>
  );
};
