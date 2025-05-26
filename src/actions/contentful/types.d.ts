type ContentfulCollection<T extends string> = `${T}Collection`;

type ContentfulGraphQLResponse<T extends string, U> = {
  data: Record<ContentfulCollection<T>, { items: U[] }>;
};

type MultiLanguageData<T> = {
  en: T;
  es: T;
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
