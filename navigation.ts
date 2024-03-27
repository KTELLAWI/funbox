// import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
// import {locales, pathnames, localePrefix} from './config';

// export const {Link, redirect, usePathname, useRouter} =
//   createLocalizedPathnamesNavigation({
//     locales,
//     pathnames,
//     localePrefix
//   });
import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
  
  export const defaultLocale = 'en';
  
  export const locales = ['en', 'ar'] as const;
  
  export const localePrefix =
    process.env.NEXT_PUBLIC_LOCALE_PREFIX === 'never' ? 'never' : 'as-needed';
  
  export const pathnames = {
    '/': '/',
    '/client': '/client',
    '/client/redirect': '/client/redirect',
    '/nested': {
      en: '/nested', 
      ar: '/anidada'
    },
    '/redirect': '/redirect',
    '/blogs/[slug]': {
      en: '/blogs/[slug]',
      ar: '/blogs/[slug]',
    }
  } satisfies Pathnames<typeof locales>;
  
  export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
      locales,
      localePrefix,
      pathnames
    });