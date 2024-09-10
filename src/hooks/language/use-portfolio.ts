import en from 'languages/portfolio/en';
import es from 'languages/portfolio/es';
import { useLanguageState } from 'store/language-atom';

export default (): Portfolio => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
