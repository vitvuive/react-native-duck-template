import { isAndroid } from '@/core/theme';

export const mapping = {
  strict: {
    'text-font-family': 'OpenSans-Regular',

    'text-heading-1-font-weight': isAndroid ? 'bold' : '700',
    'text-heading-1-font-family': 'OpenSans-Bold',

    'text-heading-2-font-weight': isAndroid ? 'bold' : '700',
    'text-heading-2-font-family': 'OpenSans-Bold',

    'text-heading-3-font-weight': isAndroid ? 'bold' : '700',
    'text-heading-3-font-family': 'OpenSans-Bold',

    'text-heading-4-font-weight': isAndroid ? 'bold' : '700',
    'text-heading-4-font-family': 'OpenSans-Bold',

    'text-heading-5-font-weight': isAndroid ? 'bold' : '700',
    'text-heading-5-font-family': 'OpenSans-Bold',

    'text-heading-6-font-weight': isAndroid ? 'bold' : '700',
    'text-heading-6-font-family': 'OpenSans-Bold',

    'border-radius': 5,
  },
};
