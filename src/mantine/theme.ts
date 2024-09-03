import type { MantineTheme } from '@mantine/core';
import {
  Accordion,
  Anchor,
  AppShell,
  Modal,
  NavLink,
  Timeline,
  Title,
  createTheme,
} from '@mantine/core';
import colorSchemeValues from 'mantine/color-scheme-values';
import cssVariables from 'mantine/css-variables';
import styles from 'mantine/styles.module.css';

const { appShell, anchor, navLink, timeline } = cssVariables;

export type MainTheme = Omit<MantineTheme, 'other'> & {
  other: typeof colorSchemeValues;
};

const mainTheme = createTheme({
  fontFamily: 'Cabin',
  headings: {
    fontFamily: 'Cabin',
  },
  other: colorSchemeValues,
  components: {
    Accordion: Accordion.extend({
      styles: {
        control: {
          borderRadius: '.5rem',
        },

        label: {
          fontWeight: '500',
        },

        item: {
          border: 0,
        },
      },
      classNames: {
        control: `${styles['accordion-control']}`,
      },
    }),

    AppShell: AppShell.extend({
      styles: (_, { navbar }) => {
        const isNavbarOpened = !(
          navbar?.collapsed?.mobile || navbar?.collapsed?.desktop
        );

        return {
          header: {
            border: 0,
            background: '#242424',
            color: '#E7E7E7',
            boxShadow: '3px 9px 33px -10px rgba(20, 20, 20, 0.75)',
          },
          navbar: {
            background: `var(${appShell.navbar.background})`,
            boxShadow: isNavbarOpened
              ? '9px 3px 25px -15px rgba(20, 20, 20, 0.75)'
              : '',
          },
          main: {
            background: `var(${appShell.main.background})`,
          },
        };
      },
    }),

    Anchor: Anchor.extend({
      styles: {
        root: {
          color: `var(${anchor.textColor})`,
          fontWeight: '700',
        },
      },
    }),

    Modal: Modal.extend({
      styles: {
        content: {
          borderRadius: '1rem',
        },
        title: {
          fontSize: '2rem',
          fontWeight: '500',
        },
      },
    }),

    NavLink: NavLink.extend({
      defaultProps: {
        autoContrast: true,
      },
      styles: {
        body: {
          fontWeight: '700',
          borderRadius: '.5rem',
        },
      },
      vars: (_, { active }) => ({
        root: {
          '--nl-color': `var(${active ? navLink.active.textColor : navLink.inactive.textColor})`,
          '--nl-bg': `var(${active ? navLink.active.background.default : navLink.inactive.background.default})`,
          '--nl-hover': `var(${active ? navLink.active.background.hover : navLink.inactive.background.hover})`,
        },
        children: {},
      }),
      classNames: (_, { active }) => ({
        root: !active ? `${styles.navlink}` : undefined,
      }),
    }),

    Timeline: Timeline.extend({
      defaultProps: {
        color: `var(${timeline.color})`,
      },
      styles: {
        itemTitle: {
          fontWeight: 900,
        },
      },
    }),

    Title: Title.extend({
      styles: (_, { variant }) => {
        if (variant === 'heading') {
          return {
            root: {
              fontFamily: 'Graduate',
              letterSpacing: '2px',
            },
          };
        }

        return {};
      },
    }),
  },
}) as MainTheme;

export default mainTheme;
