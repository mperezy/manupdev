import type { MantineTheme } from '@mantine/core';
import { NavLink } from '@mantine/core';
import {
  Accordion,
  Anchor,
  AppShell,
  Timeline,
  Title,
  createTheme,
} from '@mantine/core';
import cssVariables from 'mantine/css-variables';
import styles from 'mantine/styles.module.css';

const { appShell, anchor, navLink } = cssVariables;

const other = {
  light: {
    textColor: '#323232',

    accordion: {
      control: {
        hover: {
          textColor: '#323232',
          background: '#d1d1d1',
        },
      },
    },

    anchor: {
      textColor: '#4DABF7',
    },

    appShell: {
      navbar: {
        background: '#E7E7E7',
      },
      main: {
        background: '#F5F5F5',
      },
    },

    loader: {
      color: '#717171',
    },

    navLink: {
      active: {
        textColor: '#209aff',
        background: {
          default: '#a4d7ff',
          hover: '#b5defd',
        },
      },
      inactive: {
        textColor: '#E7E7E7',
        background: {
          default: 'transparent',
          hover: '#B7B7B7',
        },
      },
    },
  },

  dark: {
    textColor: '#E7E7E7',

    accordion: {
      control: {
        hover: {
          textColor: '#E7E7E7',
          background: '#6c6c6c',
        },
      },
    },

    anchor: {
      textColor: '#62b7ff',
    },

    appShell: {
      navbar: {
        background: '#353535',
      },
      main: {
        background: '#464646',
      },
    },

    loader: {
      color: '#CDCDCD',
    },

    navLink: {
      active: {
        textColor: '#F5F5F5',
        background: {
          default: '#2FA6FF',
          hover: '#4DABF7',
        },
      },
      inactive: {
        textColor: '#b7b7b7',
        background: {
          default: 'transparent',
          hover: '#dbf2ff',
        },
      },
    },
  },
};

export type MainTheme = Omit<MantineTheme, 'other'> & {
  other: typeof other;
};

const mainTheme = createTheme({
  fontFamily: 'Cabin',
  headings: {
    fontFamily: 'Cabin',
  },
  other,
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

    NavLink: NavLink.extend({
      defaultProps: {
        autoContrast: true,
      },
      styles: {
        body: {
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
    }),

    Timeline: Timeline.extend({
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
