import type { ReactNode } from 'react';
import type { ModalProps } from '@mantine/core';
import { Title } from '@mantine/core';
import { Modal } from '@mantine/core';
import type { ModalBaseProps } from 'providers/modal/types';

type Props = Omit<ModalProps, 'opened' | 'onClose'> &
  ModalBaseProps & { title: string | ReactNode; children: ReactNode };

export default ({ children, title, ...rest }: Props) => (
  <Modal
    {...rest}
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
    padding='xl'
    overlayProps={{
      backgroundOpacity: 0.55,
      blur: 4,
    }}
  >
    {children}
  </Modal>
);
