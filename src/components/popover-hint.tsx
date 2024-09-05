import type { ReactNode } from 'react';
import { useState } from 'react';
import { Box, em, Popover, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  text: string;
};

export default ({ children, disabled, text }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <Popover
      shadow='lg'
      disabled={disabled}
      opened={!isMobile ? opened : false}
      withArrow
    >
      <Popover.Target>
        <Box
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
          onClick={() => setOpened(false)}
        >
          {children}
        </Box>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size='xs' fw='bolder'>
          {text}
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};
