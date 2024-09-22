type ColorScheme = {
  dark: string;
  light: string;
};

type Platform = {
  certificate: ColorScheme;
  course: ColorScheme;
};

type EducationPlatformColorScheme = Partial<Record<Tech, Platform>>;
