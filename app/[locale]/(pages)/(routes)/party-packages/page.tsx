export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image"
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import TextBanner from "@/components/text-banner"
import PricingCard from "@/components/pricing-card";
import { Card, CardHeader } from "@/components/ui/card";
// import { , RATE_CARDS, PARTY_BENEFITS } from "@/constants"
import { importConstants } from "@/lib/utils";
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server";
type Props = {
  params: { locale: string };
};
const PartyPackages = async ({ params: { locale } }: Props) => {
  //unstable_setRequestLocale(locale);

  const t = await getTranslations("PageParagraph" as any);

  const { PARTY_PACKAGES, RATE_CARDS, PARTY_BENEFITS } = await importConstants(locale);

  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/party_banner.jpeg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{locale ==='en' ? "Party / Event Packages" :"باقة الحفلات"}</h1>
      </TextBanner>

      {/* Party Packages Main Content  */}
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >

        {/* Party Package Benefits  */}
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full !leading-[2em] text-center pb-10">{t(`PartyPackagePage1`)}
          </p>

          <Header
            title={locale === 'en' ? "What will you get ?" :"ما الذي ستحصل عليه؟"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full !leading-[2em] text-center pt-10">{t("PartyPackagePage2")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-10">
            {
              PARTY_BENEFITS.map((data) => (
                <Card
                  key={data.key}
                  className="rounded-lg overflow-hidden border-none shadow-none flex items-center justify-start flex-col"
                >
                  <div className="relative bg-[#f5f5f5] rounded-full w-36 h-36 flex items-center justify-center">
                    <Image
                      alt="Image"
                      src={data.src}
                      width={65}
                      height={65}
                    />
                  </div>
                  <CardHeader className="flex flex-col px-4 py-10 text-[#393d72] text-base md:text-lg font-semibold w-full !leading-[1.5em] text-center pt-6">
                    {data.desc}
                  </CardHeader>
                </Card>
              ))
            }
          </div>
        </div>

        {/* Maliha Road Branch – Sharjah  */}
        <div className="flex items-center justify-center flex-col gap-4 pt-20">
          <Header
            title={locale === "en" ? "Maliha Road Branch – Sharjah" :"فرع شارع مليحة - الشارقة"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {
              RATE_CARDS.slice(0, 4).map((rate) => (
                <PricingCard
                  key={rate.key}
                  title={rate.plan}
                  features={rate.features}
                  price={rate.price}
                  bgColor={rate.bgColor}
                  btnColor={rate.btnColor}
                />
              ))
            }
          </div>
        </div>

        {/* Matajer Al Mirgab Branch – Sharjah  */}
        <div className="flex items-center justify-center flex-col gap-4 pt-20">
          <Header
            title={locale ==='en' ? "Matajer Al Mirgab Branch – Sharjah " :"فرع متاجر المرقاب - الشارقة"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {
              PARTY_PACKAGES.map((rate) => (
                <PricingCard
                  key={rate.key}
                  title={rate.plan}
                  features={rate.features}
                  price={rate.price}
                  bgColor={rate.bgColor}
                  btnColor={rate.btnColor}
                />
              ))
            }
          </div>
        </div>
      </div>

      {/* Meeting Banner  */}
      <TextBanner
        imageUrl="/meeting_banner.jpeg"
        altText="Movie Banner Image"
        className="w-full h-[350px] md:h-[450px] mb-20"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{locale== 'en'? "Meeting / workshops room" :"غرف اجتماعات / ورش العمل"}</h1>
        <p className="text-white text-lg md:text-xl leading-6 md:leading-8 font-medium pb-12 pt-2">{locale === "en" ? "Look no further than Fun Box to hold your next meeting or workshops. Send us your requirements and we will do the rest!": "لا داعي للبحث بعيدًا، توجّه إلى Fun Box لعقد اجتماعك أو ورش العمل القادمة. أرسل لنا متطلباتك وسنقوم بالباقي!"}</p>

        <Link href="contact-us">
          <Button
            variant="secondary"
            size="default"
            className="text-base md:text-xl font-semibold bg-[#f45889] hover:bg-[#de4777]"
          >{locale ==="en" ? "Contact Us" :"اتصل بنا" }
          </Button>
        </Link>
      </TextBanner>
    </div>
  )
}

export default PartyPackages