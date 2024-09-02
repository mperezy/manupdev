import type {
  CSSVariablesResolver,
  ConvertCSSVariablesInput,
} from '@mantine/core';
import cssVariables from 'mantine/css-variables';
import type { MainTheme } from 'mantine/theme';

type MyCSSVariablesResolver = (theme: MainTheme) => ConvertCSSVariablesInput;

const { mantine, accordion, anchor, appShell, loader, navLink, timeline } =
  cssVariables;

const variableResolver: MyCSSVariablesResolver = (mantineTheme) => {
  const { light: lightVariables, dark: darkVariables } = mantineTheme.other;
  const {
    accordion: lightAccordion,
    anchor: lightAnchor,
    appShell: lightAppShell,
    navLink: lightNavLink,
    mantine: { textColor: lightTextColor },
    timeline: lightTimeline,
  } = lightVariables;
  const {
    accordion: darkAccordion,
    anchor: darkAnchor,
    appShell: darkAppShell,
    navLink: darkNavLink,
    mantine: { textColor: darkTextColor },
    timeline: darkTimeline,
  } = darkVariables;

  return {
    variables: {},

    light: {
      [mantine.textColor]: lightTextColor,

      // Accordion
      [accordion.control.hover.textColor]:
        lightAccordion.control.hover.textColor,
      [accordion.control.hover.background]:
        lightAccordion.control.hover.background,

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

      // Timeline
      [timeline.color]: lightTimeline.color,
    },

    dark: {
      [mantine.textColor]: darkTextColor,

      // Accordion
      [accordion.control.hover.textColor]:
        darkAccordion.control.hover.textColor,
      [accordion.control.hover.background]:
        darkAccordion.control.hover.background,

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

      // Timeline
      [timeline.color]: darkTimeline.color,
    },
  };
};

export default variableResolver as CSSVariablesResolver;
