type Role = 'Frontend' | 'Backend' | 'Fullstack Dev' | 'Devops';

type Job = {
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

type Work = {
  year: number;
  work: Job[];
};

type Portfolio = Record<'professional' | 'personal', Work[]>;

type Language = 'EN' | 'ES';
