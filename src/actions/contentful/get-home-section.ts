const query = `
query GetHomeSectionQuery {
  portfolioSectionCollection (
    limit: 1
    where: {
      title: "Home Section"
    }
  ) {
    items {
      profile {
        url
      }
      text
    }
  }
}`;

const SPACE_ID = process.env.API_CONTENTFUL_SPACE_ID ?? '';
const ACCESS_TOKEN = process.env.API_CONTENTFUL_ACCESS_TOKEN ?? '';
// eslint-disable-next-line max-len
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

export default async (): Promise<HomeSection> => {
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
      text: {
        en: '',
        es: '',
      },
      profile: '',
    };
  }

  const jsonResponse =
    (await fetchResponse.json()) as ContentfulGraphQLResponse<
      'portfolioSection',
      HomeSectionContentful
    >;

  const homeSection = jsonResponse.data.portfolioSectionCollection.items[0];

  return {
    ...homeSection,
    profile: homeSection.profile.url,
  };
};
