import type { Metadata } from 'next/';
import getPortfolio from 'actions/contentful/get-portfolio';
import getMetadata from 'actions/contentful/metadata-seo/get-metadata';
import PortfolioPage from 'components/pages/portfolio';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getMetadata('portfolio');

  return {
    description: 'Checkout my experience!',
    openGraph: {
      title: 'manup.dev | Portfolio',
      description: 'Checkout my experience!',
      url: 'https://manup.dev/portfolio',
      images: [
        {
          url: metadata.image,
          alt: 'Manu Perez Portfolio',
          type: 'image/png',
        },
      ],
    },
  };
};

export const revalidate = 3600;

export default async () => {
  const portfolio = await getPortfolio();

  return <PortfolioPage {...{ portfolio }} />;
};
