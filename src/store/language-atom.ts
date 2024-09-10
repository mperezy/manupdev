import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const languageAtom = atomWithStorage<Language>('manupdev-lan', 'EN');
languageAtom.debugLabel = 'language-atom';

const updateLanguageAtom = atom(null, (_, set, language: Language) =>
  set(languageAtom, () => language)
);

export const useLanguageState = () => useAtomValue(languageAtom);

export const useLanguageActions = () => {
  const updateLanguage = useSetAtom(updateLanguageAtom);

  return { updateLanguage };
};
