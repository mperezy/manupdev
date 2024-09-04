import { useState } from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { Anchor, Accordion, Flex, Stack, Text, List } from '@mantine/core';
import BaseModal from 'components/base-modal';
import Pulsating from 'components/pulsating-container';
import TechBadge from 'components/tech-badge';
import type { Job } from 'constants/portfolio';
import type { ModalBaseProps } from 'providers/modal/types';

type Props = ModalBaseProps & Job;

export default ({
  title,
  verbose,
  verbose2,
  roles,
  technologiesUsed,
  url,
  ...rest
}: Props) => {
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false);

  const handleClickAccordionControl = () =>
    setAccordionOpened(!accordionOpened);

  return (
    <BaseModal {...rest} size='xl' title={title}>
      <Stack>
        <Accordion mt='sm'>
          <Accordion.Item value={title}>
            <Pulsating
              visible={!accordionOpened}
              borderColor='var(--mantine-accordion-control-hover-background)'
            >
              <Accordion.Control onClick={handleClickAccordionControl}>
                Experience
              </Accordion.Control>
            </Pulsating>

            <Accordion.Panel pl='.5rem'>
              <Stack>
                {verbose}
                {verbose2 && (
                  <List size='sm'>
                    {verbose2.map((item, index) => (
                      <List.Item key={index}>{item}</List.Item>
                    ))}
                  </List>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Stack px='md' gap='sm'>
          <Text variant='label' component='span'>
            Roles:
          </Text>
          <Text pl='.5rem'>{roles.join(', ')}</Text>
        </Stack>

        <Stack px='md' gap='sm'>
          <Text variant='label' component='span'>
            Technologies used:
          </Text>
          <Flex
            pl='.5rem'
            w='100%'
            style={{ flexWrap: 'wrap', transition: 'all 0.5s' }}
            gap='xs'
          >
            {technologiesUsed.map((value) => (
              <Flex key={value}>
                <TechBadge techName={value} />
              </Flex>
            ))}
          </Flex>
        </Stack>

        <Flex px='md'>
          <Anchor href={url} target={url === '#' ? '_self' : '_blank'}>
            <Flex align='center' gap='.25rem'>
              Visit website{' '}
              <TbExternalLink style={{ position: 'relative', top: '-1px' }} />
            </Flex>
          </Anchor>
        </Flex>
      </Stack>
    </BaseModal>
  );
};
