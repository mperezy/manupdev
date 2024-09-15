import en from 'languages/footer/en';
import es from 'languages/footer/es';
import { useLanguageState } from 'store/language-atom';

export default (): Footer => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
