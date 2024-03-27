// export const dynamic = 'force-static'

import Image from "next/image"
import Header from "@/components/header";
import { CONTACT_DETAILS, } from "@/constants"
import TextBanner from "@/components/text-banner"
import { Card, CardHeader } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import { importConstants } from "@/lib/utils";
import { unstable_setRequestLocale } from "next-intl/server";
interface Props {
  params: {
    locale: string
  }
}
const ContactUs = async ({ params: { locale } }: Props) => {
  const { CONTACT_DETAILS } = await importConstants(locale);
  // unstable_setRequestLocale(locale);


  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/contact_banner.jpeg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{locale === "en" ? "Contact Us" : "اتصل بنا"}</h1>
      </TextBanner>

      {/* Contact Us Main Content  */}
      <div className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28">
        {/* Contact Header  */}
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="font-school text-[#393d72] text-sm md:text-xl font-normal w-full !leading-[2em] text-center">{locale === 'en' ? "Feel free to get in touch by email or telephone." : "لا تتردد في التواصل معنا عبر البريد الإلكتروني أو الهاتف."}
          </p>

          <Header
            title={locale === 'en' ? "Get in Touch" : "تواصل معنا"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />
        </div>

        {/* Contact Form  */}
        <div className="my-10 md:my-20 flex items-start flex-col md:flex-row gap-10 md:gap-40">
          <div className="w-full md:w-[60%]">
            <ContactForm />
          </div>
          <div className="w-full md:w-[40%]">
            <div className="grid grid-cols-1 gap-2">
              {
                CONTACT_DETAILS.map((data) => (
                  <Card
                    key={data.key}
                    className="rounded-lg overflow-hidden border-none shadow-none flex items-center  justify-start flex-row"
                  >
                    <div className="w-14 h-[3.2rem] flex items-center justify-center rounded-full" style={{ backgroundColor: data.bgColor }}>
                      <div
                        className={`text-2xl ${data.iconColor}`}
                      >
                        <data.icon />
                      </div>
                    </div>
                    <CardHeader className="flex flex-col px-4 text-[#787878] text-base md:text-lg font-semibold w-full !leading-[1.5em] text-center pt-6 space-y-0 p-4">
                      <span>{data.desc.split('\n').map((item, key) => (
                        <span key={key}>
                          {item}
                          <br />
                        </span>
                      ))}
                      </span>
                    </CardHeader>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>

        {/* Google Maps  */}
        <div className="  mt-10 ">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0981573044355!2d28.6568290752217!3d40.97933142120802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fcc8723ff2d%3A0xf9fa4aa535d9b270!2sFNBX%20Shop!5e0!3m2!1sen!2str!4v1710859496758!5m2!1sen!2str" width="100%" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.4818823637906!2d55.41872947496119!3d25.38867552391931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59d15d89e3cf%3A0x3da39f44ff766d17!2sMatajer%20Al%20Mirgab!5e0!3m2!1sen!2sin!4v1707734809138!5m2!1sen!2sin" width="100%" height="350" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs