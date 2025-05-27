import type { Metadata } from 'next/';
import getAboutMeSection from 'actions/contentful/get-about-me-section';
import getCertifications from 'actions/contentful/get-certifications';
import getMetadata from 'actions/contentful/metadata-seo/get-metadata';
import AboutPage from 'components/pages/about';

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getMetadata('about-me');

  return {
    description: 'Get more info about me!',
    openGraph: {
      title: 'manup.dev | About me',
      description: 'Get more info about me!',
      url: 'https://manup.dev/about',
      images: [
        {
          url: metadata.image,
          alt: 'Manu Perez - About me',
          type: 'image/png',
        },
      ],
    },
  };
};

export const revalidate = 3600;

export default async () => {
  const aboutMeSection = await getAboutMeSection();
  const certifications = await getCertifications();

  return <AboutPage {...{ certifications, aboutMeSection }} />;
};
