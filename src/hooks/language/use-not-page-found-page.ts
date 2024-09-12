import en from 'languages/not-found-page/en';
import es from 'languages/not-found-page/es';
import { useLanguageState } from 'store/language-atom';

export default (): NotFoundPage => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
