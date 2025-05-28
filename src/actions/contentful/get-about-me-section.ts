import fetchQuery from 'actions/contentful/fetch-query';

const query = `
query GetAboutMeSectionQuery {
  portfolioSectionCollection (
    limit: 1
    where: {
      title: "About Me"
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

export default async (): Promise<AboutMeSection> => {
  const response = await fetchQuery<
    'portfolioSection',
    AboutMeSectionContentful
  >({
    query,
    nextHeaders: { revalidate: 3600 },
  });

  if (!response) {
    return {
      text: {
        en: '',
        es: '',
      },
      profile: '',
    };
  }

  const homeSection = response.portfolioSectionCollection.items[0];

  return {
    ...homeSection,
    profile: homeSection.profile.url,
  };
};
