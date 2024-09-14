import type { ReactNode } from 'react';
import type { ModalProps } from '@mantine/core';
import { Title } from '@mantine/core';
import { Modal } from '@mantine/core';
import type { ModalBaseProps } from 'providers/modal/types';

type Props = Omit<ModalProps, 'opened' | 'onClose'> &
  ModalBaseProps & {
    title: string | ReactNode;
    children: ReactNode;
    onCloseCallback?: () => void;
  };

export default ({ children, title, onCloseCallback, ...rest }: Props) => (
  <Modal
    {...rest}
    onClose={() => {
      onCloseCallback?.();
      rest.onClose();
    }}
    centered
    keepMounted={false}
    title={
      <Title
        variant='heading'
        component='span'
        fz={{ base: '1.5rem', md: '2.125rem' }}
        style={{ transition: 'all 0.5s' }}
      >
        {title}
      </Title>
    }
    overlayProps={{
      backgroundOpacity: 0.55,
      blur: 4,
    }}
  >
    {children}
  </Modal>
);
