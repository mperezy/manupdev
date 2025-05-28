import type { CSSProperties } from 'react';
import { TbExternalLink } from 'react-icons/tb';
import Link from 'next/link';
import { Card, Group, Text, Flex, Button } from '@mantine/core';
import { HoverAnimated } from 'components/animated';
import certificationCardColors from 'components/certification-card/colors';
import TechBadge from 'components/tech-badge';
import colors from 'components/tech-badge/colors';
import useLanguageVerbiage from 'hooks/use-language-verbiage';
import useTheme from 'hooks/use-theme';
import useWidthBreakpoints from 'hooks/use-width-breakpoints';
import certificationCardVerbiage from 'languages/certification-card';
import { useLanguageState } from 'store/language-atom';
import { analyticsEvent } from 'utils/analytics';
import formatDate from 'utils/format-date';

type CertificationCardProps = {
  certification: Certification;
  align?: CSSProperties['alignItems'];
};

export default ({
  certification,
  align = 'flex-start',
}: CertificationCardProps) => {
  const { sm, md } = useWidthBreakpoints();
  const language = useLanguageState();
  const isEnglish = language === 'EN';
  const certificationCard = useLanguageVerbiage(certificationCardVerbiage);
  const { isLightTheme } = useTheme();
  const platformBranding = certificationCardColors[certification.issuedBy];
  const techBrandingColors = colors[certification.issuedBy];
  const issuedDate = formatDate(
    certification.issued,
    isEnglish ? 'en-US' : 'es-ES'
  );

  const sendGAEvent = (event: 'certificate' | 'course') =>
    analyticsEvent({
      action: `Education course selected`,
      category: 'click',
      label: `"${certification.title}" ${event} viewed`,
    });

  return (
    <HoverAnimated
      scaleOut={1.015}
      whileHover={{
        boxShadow: md
          ? // eslint-disable-next-line max-len
            `0 0 3.75rem -1rem ${platformBranding?.certificate[isLightTheme ? 'dark' : 'light']}`
          : '',
      }}
      style={{
        width: '100%',
        maxWidth: '42rem',
        position: 'relative',
        zIndex: 1,
        borderRadius: '1rem',
      }}
    >
      <Card
        withBorder
        shadow='xl'
        padding='lg'
        radius='lg'
        variant={align}
        style={{
          position: 'relative',
          overflow: 'hidden',
          zIndex: 3,
          boxShadow: md
            ? ''
            : // eslint-disable-next-line max-len
              `0 0 3.75rem -1.5rem ${platformBranding?.certificate[isLightTheme ? 'dark' : 'light']}`,
        }}
      >
        <div
          style={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '1rem',
            width: '100%',
            height: '5px',
            // eslint-disable-next-line max-len
            background: `linear-gradient(to right, ${techBrandingColors.borderColor}, ${techBrandingColors.background})`,
            zIndex: 1,
          }}
        ></div>

        <Group
          mt='md'
          align={sm ? 'center' : 'flex-start'}
          justify='space-between'
          style={{ flexDirection: sm ? 'row' : 'column' }}
        >
          <Text fw={700} size='lg'>
            {certification.title}
          </Text>

          <TechBadge techName={certification.issuedBy} />
        </Group>

        <Text size='sm' c='dimmed' mt={md ? 'sm' : 'lg'}>
          {certificationCard.issued}: {issuedDate}
        </Text>

        <Text mt='md'>
          {isEnglish
            ? certification.description.en
            : certification.description.es}
        </Text>

        <Group mt='lg' justify='flex-start'>
          <Button
            component={Link}
            w={{ base: '100%', md: 'auto' }}
            href={certification.certificateLink}
            target='_blank'
            variant='light'
            radius='md'
            color={
              platformBranding?.certificate[isLightTheme ? 'light' : 'dark']
            }
            onClick={() => sendGAEvent('certificate')}
          >
            <Flex align='center' gap='.25rem'>
              {certificationCard.view}{' '}
              <TbExternalLink style={{ position: 'relative', top: '-1px' }} />
            </Flex>
          </Button>

          <Button
            component={Link}
            w={{ base: '100%', md: 'auto' }}
            href={certification.courseLink}
            target='_blank'
            variant='light'
            radius='md'
            color={platformBranding?.course[isLightTheme ? 'light' : 'dark']}
            onClick={() => sendGAEvent('course')}
          >
            <Flex align='center' gap='.25rem'>
              {certificationCard.link}{' '}
              <TbExternalLink style={{ position: 'relative', top: '-1px' }} />
            </Flex>
          </Button>
        </Group>
      </Card>
    </HoverAnimated>
  );
};
