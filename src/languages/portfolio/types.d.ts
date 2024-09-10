type Job = {
  title: string;
  url: string;
  roles: ('Frontend' | 'Backend' | 'Fullstack Dev' | 'Devops')[];
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

type Language = 'EN' | 'ES';
