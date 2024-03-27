"use client"

import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation';
import Calendar from "./calendar";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
  const pathname = usePathname();
  const locale =useLocale();

  return (
    <div
      className="bg-[#25aca51a] flex items-center justify-between flex-col px-6 lg:px-20 relative z-30 pt-5 pb-10 m-5 rounded-3xl"
    >
      <div className="flex items-center gap-16">
        {/* NavLinks  */}
        <ul className="h-full gap-4 flex items-center justify-center flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.key} onClick={closeMenu} className="relative pb-2">
              <Link
              prefetch={false}
               href={`/${locale}/${link.href}`}
                className={cn("font-rubik text-[#858687] text-base font-medium transition-all hover:text-[#393d72] leading-8", pathname === link.href ? "text-[#393d72]" : "text-zinc-400")}
              >
                {link.label}

                {pathname === `/${locale}/${link.href}` && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#FE4880] rounded-full"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button  */}
      <div className="flex mt-8">
        <div className="font-rubik flex items-center justify-center flex-col gap-2 border-[1.5px] border-dashed border-[#ff4880] rounded-[20px] px-6 py-2">
          <Link href="#" className="text-[#393d72] text-base font-medium hover:text-[#ff4880] cursor-pointer">+971 50 405 1377</Link>
          <Link href="mailto:http://info@bebio.com" className="text-[#393d72] text-base font-medium hover:text-[#ff4880] cursor-pointer">info@funboxuae.ae</Link>
        </div>
      </div>

      {/* Party Booking Button  */}
      <div className="flex items-center justify-center flex-col mt-8 gap-4">
        <Link href="contact-us" target="_blank" rel="noopener noreferrer">
          <Button
            variant="secondary"
            size="sm"
            className="font-rubik font-medium text-sm md:text-base bg-[#00adb5] hover:bg-[#1a9096] px-10 py-0 h-[3rem] w-full"
          >Party Booking
          </Button>
        </Link>

        <Calendar
          variant="secondary"
          size="sm"
          calNamespace=""
          calLink="funbox/15-min-meeting"
          calConfig='{"layout":"month_view"}'
          className="font-rubik font-medium text-sm md:text-base bg-[#F99C5D] hover:bg-[#ec8d4e] px-10 py-0 h-[3rem] w-full"
        >
          Book a meeting
        </Calendar>
      </div>
    </div>
  )
}

export default MobileMenu