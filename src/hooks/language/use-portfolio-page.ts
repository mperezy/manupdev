import en from 'languages/portfolio-page/en';
import es from 'languages/portfolio-page/es';
import { useLanguageState } from 'store/language-atom';

export default (): PortfolioPage => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
