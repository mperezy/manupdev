import getHomeSection from 'actions/contentful/get-home-section';
import HomePage from 'components/pages/home';

export const revalidate = 3600;

export default async () => {
  const homeSection = await getHomeSection();

  return <HomePage {...{ homeSection }} />;
};
