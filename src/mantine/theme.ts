import { Anchor, createTheme } from '@mantine/core';

const mainTheme = createTheme({
  fontFamily: 'Cabin',
  headings: {
    fontFamily: 'Cabin',
  },
  components: {
    Anchor: Anchor.extend({
      styles: {
        root: {
          fontWeight: '500',
        },
      },
    }),
  },
});

export default mainTheme;
