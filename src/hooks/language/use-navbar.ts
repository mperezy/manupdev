import en from 'languages/navbar/en';
import es from 'languages/navbar/es';
import type RouteEnum from 'router/enum';
import { useLanguageState } from 'store/language-atom';

export default (): NavBar<RouteEnum> => {
  const language = useLanguageState();

  if (language === 'EN') {
    return en;
  }

  return es;
};
