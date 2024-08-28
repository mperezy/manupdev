import type {
  CSSVariablesResolver,
  ConvertCSSVariablesInput,
} from '@mantine/core';
import cssVariables from 'mantine/css-variables';
import type { MainTheme } from 'mantine/theme';

type MyCSSVariablesResolver = (theme: MainTheme) => ConvertCSSVariablesInput;

const { mantine, anchor, appShell, loader, navLink } = cssVariables;

const variableResolver: MyCSSVariablesResolver = (mantineTheme) => {
  const { light: lightVariables, dark: darkVariables } = mantineTheme.other;
  const {
    anchor: lightAnchor,
    appShell: lightAppShell,
    navLink: lightNavLink,
    textColor: lightTextColor,
  } = lightVariables;
  const {
    anchor: darkAnchor,
    appShell: darkAppShell,
    navLink: darkNavLink,
    textColor: darkTextColor,
  } = darkVariables;

  return {
    variables: {},

    light: {
      [mantine.textColor]: lightTextColor,

      // Anchor
      [anchor.textColor]: lightAnchor.textColor,

      // AppShell
      [appShell.navbar.background]: lightAppShell.navbar.background,
      [appShell.main.background]: lightAppShell.main.background,

      // Loader
      [loader.color]: lightVariables.loader.color,

      // NavLink
      [navLink.active.textColor]: lightNavLink.active.textColor,
      [navLink.active.background.default]:
        lightNavLink.active.background.default,
      [navLink.active.background.hover]: lightNavLink.active.background.hover,
      [navLink.inactive.textColor]: lightNavLink.inactive.textColor,
      [navLink.inactive.background.default]:
        lightNavLink.inactive.background.default,
      [navLink.inactive.background.hover]:
        lightNavLink.inactive.background.hover,
    },

    dark: {
      [mantine.textColor]: darkTextColor,

      // Anchor
      [anchor.textColor]: darkAnchor.textColor,

      // AppShell
      [appShell.navbar.background]: darkAppShell.navbar.background,
      [appShell.main.background]: darkAppShell.main.background,

      // Loader
      [loader.color]: darkVariables.loader.color,

      // NavLink
      [navLink.active.textColor]: darkNavLink.active.textColor,
      [navLink.active.background.default]:
        darkNavLink.active.background.default,
      [navLink.active.background.hover]: darkNavLink.active.background.hover,
      [navLink.inactive.textColor]: darkNavLink.inactive.textColor,
      [navLink.inactive.background.default]:
        darkNavLink.inactive.background.default,
      [navLink.inactive.background.hover]:
        darkNavLink.inactive.background.hover,
    },
  };
};

export default variableResolver as CSSVariablesResolver;
