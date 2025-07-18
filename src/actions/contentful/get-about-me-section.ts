import fetchQuery from 'actions/contentful/fetch-query';
import isProd from 'utils/is-prod';

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
        url(transform: { width: 500, height: 500, resizeStrategy: SCALE })
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
