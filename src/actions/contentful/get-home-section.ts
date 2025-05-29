import fetchQuery from 'actions/contentful/fetch-query';

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
        url(transform: { width: 500, height: 500, resizeStrategy: SCALE })
      }
      text
    }
  }
}`;

export default async (): Promise<HomeSection> => {
  const response = await fetchQuery<'portfolioSection', HomeSectionContentful>({
    query,
    nextHeaders: {
      revalidate: 3600,
    },
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
