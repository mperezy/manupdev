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
        url
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
        url
      }
    }
  }
}`;

const queryMap: Record<WebsiteSEOType, string> = {
  home: homeSEOQuery,
  portfolio: portfolioSEOQuery,
  'about-me': aboutMeSEOQuery,
};

const SPACE_ID = process.env.API_CONTENTFUL_SPACE_ID ?? '';
const ACCESS_TOKEN = process.env.API_CONTENTFUL_ACCESS_TOKEN ?? '';
// eslint-disable-next-line max-len
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

export default async (seoType: WebsiteSEOType): Promise<MetadataSEO> => {
  const query = queryMap[seoType] ?? '';

  if (!query) {
    return {
      title: '',
      image: '',
    };
  }

  const fetchResponse = await fetch(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!fetchResponse.ok) {
    return {
      title: '',
      image: '',
    };
  }

  const jsonResponse =
    (await fetchResponse.json()) as ContentfulGraphQLResponse<
      'websiteSeo',
      MetadataSEOContentful
    >;

  const metadata = jsonResponse.data.websiteSeoCollection.items[0];

  return {
    ...metadata,
    image: metadata.image.url,
  };
};
