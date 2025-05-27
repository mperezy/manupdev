import getAboutMeSection from 'actions/contentful/get-about-me-section';
import getCertifications from 'actions/contentful/get-certifications';
import AboutPage from 'components/pages/about';

export const revalidate = 3600;

export default async () => {
  const aboutMeSection = await getAboutMeSection();
  const certifications = await getCertifications();

  return <AboutPage {...{ certifications, aboutMeSection }} />;
};
