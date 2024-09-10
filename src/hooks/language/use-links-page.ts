import en from 'languages/links-page/en';
import es from 'languages/links-page/es';
import { useLanguageState } from 'store/language-atom';

export default (): LinksPage => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
