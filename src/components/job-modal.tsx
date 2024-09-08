import { useState } from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { Anchor, Accordion, Flex, Stack, Text, List, Box } from '@mantine/core';
import {
  FallDownAnimated,
  HorizontalMoveAnimated,
  HoverAnimated,
  ScaleOutAnimated,
} from 'components/animated';
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
  const techCount = technologiesUsed.length;
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false);

  const handleClickAccordionControl = () =>
    setAccordionOpened(!accordionOpened);

  return (
    <BaseModal
      {...rest}
      size='xl'
      title={
        <ScaleOutAnimated>
          <Box px={{ base: 'xs', md: 'md' }}>{title}</Box>
        </ScaleOutAnimated>
      }
    >
      <Stack
        px={{ base: 'xs', md: 'md' }}
        pb={{ base: 'xs', md: 'md' }}
        style={{
          overflowX: 'hidden',
        }}
      >
        <FallDownAnimated
          initial='hidden'
          animate='visible'
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <Accordion mt='sm'>
            <Accordion.Item value={title}>
              <HoverAnimated scaleOut={1.03} active={accordionOpened}>
                <Pulsating
                  visible={!accordionOpened}
                  // eslint-disable-next-line max-len
                  borderColor='var(--mantine-accordion-control-hover-background)'
                >
                  <Accordion.Control onClick={handleClickAccordionControl}>
                    Experience
                  </Accordion.Control>
                </Pulsating>
              </HoverAnimated>

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
        </FallDownAnimated>

        <Stack px='md' gap='sm'>
          <FallDownAnimated
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            <Text variant='label' component='span'>
              Roles:
            </Text>
          </FallDownAnimated>

          <HorizontalMoveAnimated direction='left-to-right' delay={1.5}>
            <Text pl='.5rem'>{roles.join(', ')}</Text>
          </HorizontalMoveAnimated>
        </Stack>

        <Stack px='md' gap='sm'>
          <FallDownAnimated
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.5,
              delay: 2,
            }}
          >
            <Text variant='label' component='span'>
              Technologies used:
            </Text>
          </FallDownAnimated>

          <Flex
            pl='.5rem'
            w='100%'
            style={{
              flexWrap: 'wrap',
              transition: 'all 0.5s',
              overflowX: 'hidden',
            }}
            gap='xs'
          >
            {technologiesUsed.map((value, index) => (
              <HorizontalMoveAnimated
                key={value}
                direction='left-to-right'
                custom={index}
                delay={2.5}
              >
                <TechBadge techName={value} />
              </HorizontalMoveAnimated>
            ))}
          </Flex>
        </Stack>

        <Flex px='md'>
          <FallDownAnimated
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.5,
              delay: (techCount % 2 === 0 ? techCount : techCount + 1) * 0.5,
            }}
          >
            <HoverAnimated scaleOut={1.07}>
              <Anchor href={url} target={url === '#' ? '_self' : '_blank'}>
                <Flex align='center' gap='.25rem'>
                  Visit website{' '}
                  <TbExternalLink
                    style={{ position: 'relative', top: '-1px' }}
                  />
                </Flex>
              </Anchor>
            </HoverAnimated>
          </FallDownAnimated>
        </Flex>
      </Stack>
    </BaseModal>
  );
};
