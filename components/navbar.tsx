"use client"

import { useState } from "react"
import Image from "next/image"
// import Link from "next/link"
import MobileMenu from "./mobile-menu"
import { NAV_LINKS } from "@/constants"
import { Menu } from 'lucide-react';
import { SOCIAL_LINKS } from "@/constants";
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import Calendar from "./calendar"
import curveImage from "../public/logo-curve.png"
import LocalSwitcher from "./Local-switcher"
import { AbstractIntlMessages, useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"
const Navbar =  () => {
  const t = useTranslations('NavBar' as any);
  const pathname = usePathname();
  //  const hostName = window.location.hostname;
  const locale = useLocale();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const toggleMenu = (): void => {
   console.log("rrrrrrrrrrrrrrrrrrrrrrrrr",)
    setMobileMenu(!mobileMenu);
  };
  // console.log("locallllllllllllllllll", locale)
  // console.log("locallllllllllllllllll", pathname)
  return (
    <>
      <nav className="bg-white sticky top-0 z-30 border-b-2 border-[#f9f5f0]">
        <div
          className="flex items-center justify-between mx-auto max-w-[1280px] px-5 lg:px-8 relative py-5 lg:py-6"
        >
          <div className="flex items-center gap-16">

            {/* Logo  */}
            {/* ///checl last commit for element was here */}
            <Menu
            width={32}
            height={32}
            className="inline-block lg:hidden text-[#ff4880]"
            onClick={ ()=>toggleMenu()}
          />
            

            {/* NavLinks  */}
            <ul className="hidden h-full gap-8 lg:flex relative">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="relative pb-2">
                  <Link
                    // locale={locale}
                    href={`/${locale}/${link.href}`}
                    className={cn("font-rubik text-[#858687] text-base font-medium transition-all hover:text-[#393d72] leading-8", pathname === link.href ? "text-[#393d72]" : "text-zinc-400")}
                  >
                    {t(`${link.key}` as never)}
                    {pathname === `/${locale}/${link.href}` && (
                      <div className="absolute bottom-1 border-dashed border-t-4 border-red-700 left-1/2 transform -translate-x-1/2 w-full h-1  rounded-full"></div>
                    )}
                  </Link>
                </li>
              ))}
                  <LocalSwitcher />
            </ul>


          </div>

          {/* Contact Button  */}
          <div className="hidden lg:flex">
            <div className="font-rubik flex items-center justify-center flex-col gap-2 border-[1.5px] border-dashed border-[#ff4880] rounded-[20px] px-6 py-2">
              <Link href="#" className="text-[#393d72] text-base font-medium hover:text-[#ff4880] cursor-pointer">+971 50 405 1377</Link>
              <Link href="mailto:http://info@bebio.com" className="text-[#393d72] text-base font-medium hover:text-[#ff4880] cursor-pointer">info@funboxuae.ae</Link>
            </div>
          </div>

          {/* Hamburger Mobile Menu  */}
          
        
          <Link href="/" className="flex lg:hidden">
              <Image src="/logo.jpg" alt="logo" width={60} height={45} />
            </Link>
          <div className="lg:hidden flex"><LocalSwitcher /></div>
        </div>
        {
          mobileMenu && (
            <MobileMenu closeMenu={()=>toggleMenu()} />
          )
        }
      </nav>

      {/* Bottom Navbar  */}
      <div className="z-20 relative bg-white hidden md:flex">
        <div className="relative flex items-center  justify-center mx-auto max-w-[1280px] px-0 py-5 lg:py-6 w-full">

          <Link href="/">
            <div className="absolute left-0 right-0 bottom-[-68px]  mx-auto h-[68px] w-[320px] shadow-inner">
              <div className="">
                <Image src="/logo-curve.png" alt="Logo" width={300} height={100} className="mx-auto" />
                {/* <Image src="/logo-curve.png" alt="Logo" className="translate-y-[3px] shadow-inner  py-0" style={{ zIndex: 0 }} /> */}
              </div>
            </div>

            <Image src="/logo.jpg" alt="logo" width={70} height={70} className="absolute top-[7px] left-[47%] lg:-bottom-[1.5rem] lg:left-[47%] z-[3]" />
          </Link>

          {/* Social Links  */}
          <ul className=" flex gap-4 absolute -bottom-[1.5rem] left-[2rem]">
            {SOCIAL_LINKS?.map((link, index) => (

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

          {/* Party Booking Button  */}
          <div className=" hidden lg:flex lg:absolute lg:-bottom-[1.5rem] lg:right-[2rem]">
            <Link href="contact-us" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="sm"
                className="font-rubik font-medium text-sm md:text-base bg-[#00adb5] hover:bg-[#1a9096] px-10 py-0 h-[3rem]"
              >{locale === 'en' ? "Party Booking" : "حجز المناسبات"}
              </Button>
            </Link>

            {/* <Calendar
              variant="secondary"
              size="sm"
              calNamespace=""
              calLink="funbox/15-min-meeting"
              calConfig='{"layout":"month_view"}'
              className="font-rubik font-medium text-sm md:text-base bg-[#F99C5D] hover:bg-[#ec8d4e] px-10 py-0 h-[3rem] ml-4"
            >
              Book a meeting
            </Calendar> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar