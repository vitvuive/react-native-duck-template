import en from '@/translation/en.json';
import vi from '@/translation/vi.json';

export const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

export type Language = keyof typeof resources;
