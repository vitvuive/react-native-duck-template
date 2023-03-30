import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { resources } from './resources';
export * from './utils';

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // By default React Native projects does not support Intl
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
export default i18n;
