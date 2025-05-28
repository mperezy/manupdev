import fetchQuery from 'actions/contentful/fetch-query';

const query = `
query GetAllProfessionalJobsQuery {
  jobCollection (
    order: from_ASC,
  ) {
    items {
      title
      isProfessionalJob
      description
      verbose
      verbose2
      from
      to
      url
      roles: rolesCollection (limit: 5) {
        items {
          ... on Role {
            label
          }
        }
      }
      techs: techsCollection (limit: 50) {
        items {
          ... on Tech {
            label
          }
        }
      }
    }
  }
}`;

const getJobsFlatDetailed = (jobs: JobContentful[]): Work[] => {
  const arr = jobs
    .map(({ roles, techs, ...job }) => ({
      ...job,
      roles: roles.items.map(({ label }) => label) as Role[],
      technologiesUsed: techs.items.map(({ label }) => label) as Tech[],
    }))
    // eslint-disable-next-line
    .map<Job>(({ isProfessionalJob, ...job }) => ({
      ...job,
      from: new Date(job.from),
      to: job.to ? new Date(job.to) : new Date(),
      year: new Date(job.from).getUTCFullYear(),
    }))
    .reduce(
      (acc, curr) => {
        const { year } = curr;
        if (!acc[year]) {
          acc[year] = {
            year,
            work: [],
          };
        }
        acc[year].work.push(curr);

        return acc;
      },
      {} as Record<number, { year: number; work: Job[] }>
    );

  return Object.values(arr);
};

export default async (): Promise<Portfolio> => {
  const response = await fetchQuery<'job', JobContentful>({
    query,
    nextHeaders: {
      revalidate: 3600,
    },
  });

  if (!response) {
    return {
      professional: [],
      personal: [],
    };
  }

  const allJobs = response.jobCollection.items;
  const professional = getJobsFlatDetailed(
    allJobs.filter(({ isProfessionalJob }) => isProfessionalJob)
  );
  const personal = getJobsFlatDetailed(
    allJobs.filter(({ isProfessionalJob }) => !isProfessionalJob)
  );

  return { professional, personal };
};
