'use client';

import { useLocale } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Button } from './ui/button';
import arabicFlag from "../public/united-arab-emirates.png";
import englishFlag from '../public/united-kingdom.png';
export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const lang = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const language = locale === 'en' ? 'العربية' : 'English';
  const langFlag = locale === 'en'? '/united-arab-emirates.png':'/united-kingdom.png';
  function onSelectChange() {
    //const nextLocale = event.target.value;
    startTransition(() => {
      //router.replace(`/${nextLocale}`);
      // router.replace(
      //   // @ts-expect-error -- TypeScript will validate that only known `params`
      //   // are used in combination with a given `pathname`. Since the two will
      //   // always match for the current route, we can skip runtime checks.
      //   {pathname, params},
      //   {locale: nextLocale}
      // );
      // router.replace(
      //   // @ts-expect-error -- TypeScript will validate that only known `params`
      //   // are used in combination with a given `pathname`. Since the two will
      //   // always match for the current route, we can skip runtime checks.
      //   {pathname, params},
      //   {locale: nextLocale}
      // );
      //.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=31536000; SameSite=Lax`;
     // router.refresh();
      //const newPathname = pathname.includes("blogs") ? `/${otherLocale}/blogs}` : `/${otherLocale}${pathname.slice(3)}`  ; 
      const newPathname = pathname.includes("blogs") ? `/${otherLocale}/blogs` : `/${otherLocale}${pathname.slice(3)}`;
// Assuming the language prefix length is always 3 characters
      router.replace(newPathname);
    });
  }

  return (
    <div className=' flex items-center justify-center gap-3 '>
      <img src={langFlag} alt='flag' width={0} height={0} className='w-5 h-5 '/>
    <Button variant={'link'}
    size={"icon"}
      className='  font-semibold text-base '
      onClick={() => onSelectChange()}

    >
      {language}
    </Button>
    </div>
    // <label className='border-2 rounded'>
    //   <p className='sr-only'>change language</p>
    //   <select
    //     defaultValue={localActive}
    //     className='bg-transparent py-2 border-none'
    //     onChange={onSelectChange}
    //     disabled={isPending}
    //   >
    //     <option value='en'>English</option>
    //     <option value='ar'>Arabic</option>
    //   </select>
    // </label>
  );
}

// import {useLocale, useTranslations} from 'next-intl';
// import {Link} from '../navigation';

// export default function LocalSwitcher() {
//   //const t = getTranslations('NavBar');

//   const locale = useLocale();
//   const otherLocale = locale === 'en' ? 'ar' : 'en';

//   return (
//     <Link href="/" locale={otherLocale}>
//       {otherLocale}
//      {/* // {t('title', {locale: otherLocale})} */}
//     </Link>
//   );
// }