import type { Metadata } from 'next/';
import getHomeSection from 'actions/contentful/get-home-section';
import getMetadata from 'actions/contentful/metadata-seo/get-metadata';
import HomePage from 'components/pages/home';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getMetadata('home');

  return {
    title: 'manup.dev | Home',
    description: 'Welcome to my portfolio!',
    openGraph: {
      siteName: 'Manu Perez Portfolio website | Home',
      title: 'manup.dev | Home',
      description: 'Welcome to my portfolio!',
      url: 'https://manup.dev',
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
  const homeSection = await getHomeSection();

  return <HomePage {...{ homeSection }} />;
};
