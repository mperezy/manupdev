import { useLanguageState } from 'store/language-atom';

type Props<T> = {
  en: T;
  es: T;
};

export default <T>({ en, es }: Props<T>): T => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
