import type { ReactNode } from 'react';
import type { ModalProps } from '@mantine/core';
import { Modal } from '@mantine/core';
import type { ModalBaseProps } from 'providers/modal/types';

type Props = Omit<ModalProps, 'opened' | 'onClose'> &
  ModalBaseProps & { title: string; children: ReactNode };

export default ({ children, title, ...rest }: Props) => (
  <Modal
    {...rest}
    centered
    keepMounted={false}
    title={title}
    padding='xl'
    overlayProps={{
      backgroundOpacity: 0.55,
      blur: 4,
    }}
  >
    {children}
  </Modal>
);
