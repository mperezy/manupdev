type MultiLanguageData<T> = {
  en: T;
  es: T;
};

type ImageAsset = {
  url: string;
};

type HomeSectionContentful = {
  text: MultiLanguageData<string>;
  profile: ImageAsset;
};

type AboutMeSectionContentful = {
  text: MultiLanguageData<string>;
  profile: ImageAsset;
};

type RoleContentful = {
  label: string;
};

type TechContentful = {
  label: string;
};

type JobContentful = {
  title: string;
  isProfessionalJob: boolean;
  description: MultiLanguageData<string>;
  verbose: MultiLanguageData<string>;
  verbose2: MultiLanguageData<string[]>;
  from: string;
  to?: string | null;
  url: string;
  roles: { items: RoleContentful[] };
  techs: { items: TechContentful[] };
};

type CertificationContentful = {
  id: string;
  title: string;
  issued: string;
  certificateLink: string;
  courseLink: string;
  description: MultiLanguageData<string>;
  certificationIssuer: {
    name: string;
  };
};
