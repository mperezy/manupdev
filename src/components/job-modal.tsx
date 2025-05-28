import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { TbExternalLink } from 'react-icons/tb';
import { Accordion, Flex, Stack, Text, List, Box } from '@mantine/core';
import {
  FallDownAnimated,
  HorizontalMoveAnimated,
  HoverAnimated,
  ScaleOutAnimated,
} from 'components/animated';
import BaseModal from 'components/base-modal';
import CompanyIcon from 'components/company-icon';
import Link from 'components/link';
import Pulsating from 'components/pulsating-container';
import TechBadge from 'components/tech-badge';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import portfolioPageVerbiage from 'languages/portfolio-page';
import type { ModalBaseProps } from 'providers/modal/types';
import { useLanguageState } from 'store/language-atom';
import formatDate from 'utils/format-date';

const parseDate = (date: Date, locale: string): string => {
  const currentDate = new Date();
  const isCurrentMonthAndYear =
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();

  if (isCurrentMonthAndYear) {
    return locale.startsWith('en') ? 'Now...' : 'Ahora...';
  }

  return formatDate(date, locale);
};

type Props = ModalBaseProps & Job;

export default ({
  title,
  from,
  to,
  verbose,
  verbose2,
  roles,
  technologiesUsed,
  url,
  ...rest
}: Props) => {
  const language = useLanguageState();
  const portfolioPage = useLanguageVerbiage(portfolioPageVerbiage);
  const isEnglish = language === 'EN';
  const { md } = useWidthBreakpoints();
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false);
  const parsedFrom = parseDate(from, isEnglish ? 'en-US' : 'es-ES');
  const parsedTo = parseDate(to, isEnglish ? 'en-US' : 'es-ES');

  const handleClickAccordionControl = () =>
    setAccordionOpened(!accordionOpened);

  return (
    <BaseModal
      {...rest}
      size='xl'
      onCloseCallback={() => setAccordionOpened(false)}
      title={
        <ScaleOutAnimated>
          <Flex align='center' gap='xs' px={{ base: 'xs', md: 'md' }}>
            <CompanyIcon company={title} size='xl' />
            <Box>{title}</Box>
          </Flex>
        </ScaleOutAnimated>
      }
      styles={{
        header: {
          padding: md ? '2rem' : '1.75rem .75rem',
        },
        body: {
          padding: md ? '0 2rem 2rem' : '0 .75rem 1.75rem',
        },
      }}
    >
      <Stack
        px={{ base: 'xs', md: 'md' }}
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
                    {portfolioPage.experience}
                  </Accordion.Control>
                </Pulsating>
              </HoverAnimated>

              <Accordion.Panel pl='.5rem'>
                <Stack pt='md'>
                  <Flex align='center' gap='xs'>
                    <MdDateRange />
                    <Text>
                      {parsedFrom} - {parsedTo}
                    </Text>
                  </Flex>
                  {isEnglish ? verbose.en : verbose.es}
                  {verbose2 && (
                    <List size='sm'>
                      {(isEnglish ? verbose2.en : verbose2.es).map(
                        (item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        )
                      )}
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
              {portfolioPage.roles}
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
              {portfolioPage.techsUsed}
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
              delay: 3 + (technologiesUsed.length - 1) * 0.2,
            }}
          >
            <HoverAnimated scaleOut={1.07}>
              <Link href={url} target={url === '#' ? '_self' : '_blank'}>
                <Flex align='center' gap='.25rem'>
                  {portfolioPage.websiteLink}{' '}
                  <TbExternalLink
                    style={{ position: 'relative', top: '-1px' }}
                  />
                </Flex>
              </Link>
            </HoverAnimated>
          </FallDownAnimated>
        </Flex>
      </Stack>
    </BaseModal>
  );
};
