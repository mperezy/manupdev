import getCertifications from 'actions/contentful/get-certifications';
import AboutPage from 'components/pages/about';

export const revalidate = 3600;

export default async () => {
  const certifications = await getCertifications();

  return <AboutPage {...{ certifications }} />;
};
