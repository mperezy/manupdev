import fetchQuery from 'actions/contentful/fetch-query';

const homeSEOQuery = `
query GetHomeSEOQuery {
  websiteSeoCollection (
    where: {
      title: "Home"
    }
  ) {
    items {
      title
      image {
        url
      }
    }
  }
}`;

const portfolioSEOQuery = `
query GetPortfolioSEOQuery {
  websiteSeoCollection (
    where: {
      title: "Portfolio"
    }
  ) {
    items {
      title
      image {
        url(transform: { width: 550, resizeStrategy: SCALE })
      }
    }
  }
}`;

const aboutMeSEOQuery = `
query GetAboutMeSEOQuery {
  websiteSeoCollection (
    where: {
      title: "About Me"
    }
  ) {
    items {
      title
      image {
        url(transform: { width: 550, resizeStrategy: SCALE })
      }
    }
  }
}`;

const queryMap: Record<WebsiteSEOType, string> = {
  home: homeSEOQuery,
  portfolio: portfolioSEOQuery,
  'about-me': aboutMeSEOQuery,
};

export default async (seoType: WebsiteSEOType): Promise<MetadataSEO> => {
  const query = queryMap[seoType] ?? '';

  if (!query) {
    return {
      title: '',
      image: '',
    };
  }

  const response = await fetchQuery<'websiteSeo', MetadataSEOContentful>({
    query,
  });

  if (!response) {
    return {
      title: '',
      image: '',
    };
  }

  const metadata = response.websiteSeoCollection.items[0];

  return {
    ...metadata,
    image: metadata.image.url,
  };
};
