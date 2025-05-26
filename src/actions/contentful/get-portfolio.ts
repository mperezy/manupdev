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

const SPACE_ID = process.env.API_CONTENTFUL_SPACE_ID ?? '';
const ACCESS_TOKEN = process.env.API_CONTENTFUL_ACCESS_TOKEN ?? '';
// eslint-disable-next-line max-len
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

const getJobsFlatDetailed = (jobs: JobContentful[]): WorkNew[] => {
  const arr = jobs
    .map(({ roles, techs, ...job }) => ({
      ...job,
      roles: roles.items.map(({ label }) => label) as Role[],
      technologiesUsed: techs.items.map(({ label }) => label) as Tech[],
    }))
    // eslint-disable-next-line
    .map<JobNew>(({ isProfessionalJob, ...job }) => ({
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
      {} as Record<number, { year: number; work: JobNew[] }>
    );

  return Object.values(arr);
};

export default async (): Promise<PortfolioNew> => {
  const fetchResponse = await fetch(URL, {
    next: { revalidate: 3600 },
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!fetchResponse.ok) {
    return {
      professional: [],
      personal: [],
    };
  }

  const jsonResponse =
    (await fetchResponse.json()) as ContentfulGraphQLResponse<
      'job',
      JobContentful
    >;

  const allJobs = jsonResponse.data.jobCollection.items;
  const professional = getJobsFlatDetailed(
    allJobs.filter(({ isProfessionalJob }) => isProfessionalJob)
  );
  const personal = getJobsFlatDetailed(
    allJobs.filter(({ isProfessionalJob }) => !isProfessionalJob)
  );

  return { professional, personal };
};
