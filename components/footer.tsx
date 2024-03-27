"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from '@/components/ui/button';
import { CONTACT_LINKS, QUICK_LINKS, SOCIAL_LINKS,  } from "@/constants";
import { CONTACT_LINKSAr,  } from "@/constants/arabic-Index";

import { useLocale, useTranslations } from "next-intl";
import { importConstants } from "@/lib/utils";


const importConstants2 = async (locale:string) => {
  if (locale === 'ar') {
    return import('../constants/arabic-Index');
  } else {
    return import('../constants/index');
  }
};
const Footer =  ( ) => {
  const t= useTranslations('NavBar' as any);
  const locale =useLocale();
 
  const CONTACT_LINKSList = locale === "en" ? CONTACT_LINKS : CONTACT_LINKSAr ;

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <footer className="bg-[#26ada6] bg-cover bg-no-repeat bg-hero relative">
       <div className="absolute left-0 right-0 top-[0px]  mx-auto h-[68px] w-[320px] shadow-inner z-[25]">
             <div className="flex justify-center items-center">
             <Image src="/logo-curve.png" alt="Logo" width={150} height={70} sizes="" className="w-full h-full  mx-auto" /> 
               <Image src="/icon-arrow.png" alt="Logo" width={20} height={10}  onClick={scrollToTop} className=" z-[10] rotate-180 hover:-translate-y-4 absolute    transition-transform duration-500  ease-in-out  hover:cursor-pointer" />
              </div>
            </div>
      <div
        className="flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 relative"
      >
        
        {/* Top Footer  */}
        <div className="pt-16 md:pt-40 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* First Row  */}
          <div className="flex flex-col gap-8">
            <Link href="/">
              <Image src="/light_logo.png" alt="logo" width={100} height={100} priority className="-translate-y-10" />
            </Link>
            <p className="text-white font-rubik font-normal text-sm -translate-y-20 md:text-base leading-8 md:leading-10">{locale === "en" ? "An indoor playground area that offers a unique experience for kids in an innovative, attractive and fun way." :"مركز ألعاب داخلي مصمم بعناية بطريقة مبتكرة وجذابة وممتعة لجميع الأعمار ، ويقدم تجربة فريدة من خلال سلسلة من الأنشطة التي تساعد في التطور البدني"}</p>

            <div className="flex flex-col gap-4">
              {/* Sharjah Guide Button  */}
              <Link href="https://www.kayak.ae/Sharjah.36263.guide" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="default"
                  className="font-rubik font-medium text-sm md:text-base bg-[#f90] hover:bg-[#f90] px-5 md:px-6 py-5 md:py-6"
                >Sharjah Travel Guide
                </Button>
              </Link>

              {/* Sharjah Flight Button  */}
              <Link href="https://www.kayak.ae/flights" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="default"
                  className="font-rubik font-medium text-sm md:text-base bg-[#ff675b] hover:bg-[#ff675b] px-5 md:px-6 py-5 md:py-6"
                >Your flights to Sharjah
                </Button>
              </Link>
            </div>
          </div>

          {/* Second Row  */}
          <div className="flex items-start flex-col gap-6 md:gap-8">
            <span className="text-white text-xl md:text-2xl font-semibold">{locale === "en" ? "Contact":"اتصل"}</span>
            <ul className="flex flex-col gap-5">
              {CONTACT_LINKSList.map((link,index) => (
                <div key={index} className="flex items-start flex-row gap-4 text-white font-rubik text-sm md:text-base font-medium transition-all">
                  <div className={`text-lg md:text-xl ${link.iconColor}`}>
                    <link.icon
                    />
                  </div>
                  <p>{link.text}</p>
                </div>
              ))}
            </ul>
          </div>

          {/* Third Row  */}
          <div className="flex items-start flex-col gap-6 md:gap-8">
            <span className="text-white text-xl md:text-2xl font-semibold">{locale === "en" ? "Quick Links":"روابط سريعة"}</span>
            <ul className="flex flex-col gap-5">
              {QUICK_LINKS.map((link,index) => (
                <Link  href={`/${locale}/${link.href}`} key={index} className="text-white font-rubik text-sm md:text-base font-medium transition-all hover:font-semibold">
                  {t(`${link.key}` as never)}
                </Link>
              ))}
            </ul>
          </div>

          {/* Fourth Row  */}
          <div className="flex items-start flex-col gap-10 md:gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <span className="text-white text-xl md:text-2xl font-semibold">{locale ==="en" ? "Timing":"توقيت"}</span>
              <div className="flex flex-col gap-5">
                <div className="font-rubik flex items-center justify-center flex-col gap-2 border-[1.5px] border-dashed border-[#88d2ce] bg-[#4dbcb6] rounded-[20px] px-6 py-2 h-24">
                  <span className="text-white text-sm md:text-base font-semibold cursor-pointer text-center">{locale === "en"? "Matajer Al Mirgab Branch: Mon-Thu 10am – 10pm, Fri-Sun 10am-11pm" :"فرع متاجر المرقاب : الاثنين الى الخميس 10:00صباحا حتى 10:00مساءً الجمعة الى الاجد 10:00 صباحاً على 11:00مساءً"}</span>
                </div>
                <div className="font-rubik flex items-center justify-center flex-col gap-2 border-[1.5px] border-dashed border-[#88d2ce] bg-[#4dbcb6] rounded-[20px] px-6 py-2 h-24">
                  <span className="text-white text-sm md:text-base font-semibold cursor-pointer text-center">{locale === "en" ? "Maliha Road Branch: Mon-Thu 1pm – 9pm, Fri-Sun 11am-10pm":"فرع طريق مليحة : الاثنين الى الخميس 09:00 مساءً 01:00 ظهراً حتى الجمعة الى الاحد 11:00صباحاً حتى 10:00 مساءً"}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-white text-xl md:text-2xl font-semibold">{locale === "en" ? "Connect with us":"اتصل بنا"}</span>
              <ul className="flex gap-4">
                {SOCIAL_LINKS?.map((link,index) => (
                



                    <div key={index} className="w-14 h-14 flex items-center justify-center rounded-full" style={{ backgroundColor: link.bgColor }}>
                      <Link
                        key={link.key}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl ${link.iconColor}`}
                      >
                        <link.icon />
                      </Link>
                    </div>
                 
                 
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Copyright  */}
        <div className="py-10 flex items-center justify-center border-t">
          <p className="font-rubik text-center text-white text-sm md:text-base font-medium">
          {locale === "en" ? " Copyright &copy; 2024" :"جميع الحقوق محفوظة"}  <Link href="https://funboxuae.ae/" target="_blank" rel="noopener noreferrer">Funbox</Link>. {locale =='en'? "All rights reserved. Pine Tree FZC" :" 2024 @"}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer