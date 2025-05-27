import getPortfolio from 'actions/contentful/get-portfolio';
import PortfolioPage from 'components/pages/portfolio';

export const revalidate = 3600;

export default async () => {
  const portfolio = await getPortfolio();

  return <PortfolioPage {...{ portfolio }} />;
};
