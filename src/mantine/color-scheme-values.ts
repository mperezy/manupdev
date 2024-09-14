/* eslint-disable max-len */

const other: Record<'light' | 'dark', CSSVariables> = {
  light: {
    mantine: {
      textColor: '#323232',
    },

    accordion: {
      control: {
        hover: {
          textColor: '#323232',
          background: '#B7B7B7',
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
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(250, 250, 250, 1) 20%, rgba(245, 245, 245, 1) 47%, rgba(220, 220, 220, 1) 75%, rgba(185, 220, 255, 1) 100%)',
      },
    },

    loader: {
      color: '#717171',
    },

    navLink: {
      active: {
        textColor: '#209AFF',
        background: {
          default: '#A4D7FF',
          hover: '#B5DEFD',
        },
      },

      inactive: {
        textColor: '#E7E7E7',
        background: {
          default: 'transparent',
          hover: '#D1D1D1',
        },
      },
    },

    text: {
      textLabelVariantColor: '#000',
    },

    timeline: {
      color: '#2FA6FF',
    },
  },

  dark: {
    mantine: {
      textColor: '#E7E7E7',
    },

    accordion: {
      control: {
        hover: {
          textColor: '#E7E7E7',
          background: '#6C6C6C',
        },
      },
    },

    anchor: {
      textColor: '#62B7FF',
    },

    appShell: {
      navbar: {
        background: '#353535',
      },
      main: {
        background:
          'linear-gradient(0deg, rgba(24, 24, 24, 1) 0%, rgba(32, 32, 32, 1) 20%, rgba(53, 53, 53, 1) 47%, rgba(85, 85, 85, 1) 75%, rgba(58, 120, 168, 1) 100%)',
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
        textColor: '#B7B7B7',
        background: {
          default: 'transparent',
          hover: '#6C6C6C',
        },
      },
    },

    text: {
      textLabelVariantColor: '#E7E7E7',
    },

    timeline: {
      color: '#2FA6FF',
    },
  },
};

export default other;
