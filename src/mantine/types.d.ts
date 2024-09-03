type Color = {
  color: string;
};

type TextColor = {
  textColor: string;
};

type BackgroundColor = {
  background: string;
};

type CSSVariables = {
  mantine: TextColor;

  accordion: {
    control: {
      hover: TextColor & BackgroundColor;
    };
  };

  anchor: TextColor;

  appShell: {
    navbar: BackgroundColor;
    main: BackgroundColor;
  };

  loader: Color;

  navLink: {
    active: TextColor & {
      background: {
        default: string;
        hover: string;
      };
    };

    inactive: TextColor & {
      background: {
        default: string;
        hover: string;
      };
    };
  };

  text: {
    textLabelVariantColor: string;
  };

  timeline: Color;
};
