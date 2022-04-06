import { useState, useContext, createContext } from 'react';

const defaultValue = 'de';
const LanguageContext = createContext(defaultValue);

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(defaultValue);

  const value = { language, setLanguage };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
