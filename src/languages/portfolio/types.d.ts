type Role = 'Frontend' | 'Backend' | 'Fullstack Dev' | 'Devops';

type Job = {
  title: string;
  from: Date;
  to: Date;
  url: string;
  roles: Role[];
  description: string;
  verbose: string;
  verbose2?: string[];
  technologiesUsed: Tech[];
};

type Work = {
  year: number;
  work: Job[];
};

type Portfolio = Record<'professional' | 'personal', Work[]>;

type JobNew = {
  year: number;
  title: string;
  description: MultiLanguageData<string>;
  verbose: MultiLanguageData<string>;
  verbose2: MultiLanguageData<string[]>;
  from: Date;
  to: Date;
  url: string;
  roles: Role[];
  technologiesUsed: Tech[];
};

type WorkNew = {
  year: number;
  work: JobNew[];
};

type PortfolioNew = Record<'professional' | 'personal', WorkNew[]>;

type Language = 'EN' | 'ES';
