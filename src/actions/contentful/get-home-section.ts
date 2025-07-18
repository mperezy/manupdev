import fetchQuery from 'actions/contentful/fetch-query';
import isProd from 'utils/is-prod';

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
      revalidate: isProd() ? 3600 : 0,
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
