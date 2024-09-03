import { Accordion, Flex, Stack, Text } from '@mantine/core';
import BaseModal from 'components/base-modal';
import type { ModalBaseProps } from 'providers/modal/types';
import type { Job } from 'constants/portfolio';
import TechBadge from './tech-badge';

type Props = ModalBaseProps & Job;

export default ({
  title,
  verbose,
  roles,
  technologiesUsed,
  ...rest
}: Props) => (
  <BaseModal {...rest} size='xl' title={title}>
    <Stack>
      <Accordion>
        <Accordion.Item value={title}>
          <Accordion.Control>Experience</Accordion.Control>
          <Accordion.Panel pl='.5rem'>{verbose}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Stack px='md' pb='.75rem' gap='sm'>
        <Text fw='500'>Roles:</Text>
        <Text pl='.5rem'>{roles.join(', ')}</Text>
      </Stack>

      <Stack px='md' gap='sm'>
        <Text fw='500' component='span'>
          Technologies used:
        </Text>
        <Flex pl='.5rem' w='100%' style={{ flexWrap: 'wrap' }} gap='xs'>
          {technologiesUsed.map((value) => (
            <Flex key={value}>
              <TechBadge techName={value} />
            </Flex>
          ))}
        </Flex>
      </Stack>
    </Stack>
  </BaseModal>
);
