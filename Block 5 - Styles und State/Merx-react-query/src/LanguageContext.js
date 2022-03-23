import { createContext, useContext, useState } from 'react';

const defaultValue = 'de';
const LanguageContext = createContext(defaultValue);

export const LanguageConsumer = LanguageContext.Consumer;

export const LanguageProvider = ({ value, children }) => {
  const [locale, setLocale] = useState(defaultValue);

  const contextValue = {
    ...value,
    locale,
    setLocale,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLocale = () => useContext(LanguageContext);
