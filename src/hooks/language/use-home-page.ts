import en from 'languages/home-page/en';
import es from 'languages/home-page/es';
import { useLanguageState } from 'store/language-atom';

export default (): HomePage => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
