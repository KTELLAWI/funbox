export const dynamic = "force-dynamic";

import Header from "@/components/header"
import TextBanner from "@/components/text-banner"
import PricingCard from "@/components/pricing-card"
import { MALIHA_PACKAGES, MATAJER_PACKAGES } from "@/constants"
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { importConstants } from "@/lib/utils"
import { useTranslations } from "next-intl"
//import { importConstants } from "@/lib/utils"
type Props = {
  params: { locale: string };
};
const SchoolPackages = async({ params: { locale } }: Props) => {
  //unstable_setRequestLocale(locale);

  // const locale = await getLocale();
  const t = getTranslations("PageTitle" as any);
  const { MALIHA_PACKAGES, MATAJER_PACKAGES } = await importConstants(locale);
  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/school_banner.jpeg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center"> {(await t)(`prices` as never)}</h1>
      </TextBanner>

      {/* School Packages Main Content */}
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 pb-16 md:pb-28"
      >

        {/* Matajer Al Mirgab Branch – Sharjah */}
        <div className="flex items-center justify-center flex-col gap-4 pt-20">
          <Header
            title={ locale === "en" ? "Matajer Al Mirgab Branch – Sharjah" : "فرع متاجر المرقاب – الشارقة"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {
              MATAJER_PACKAGES.slice(0, 4).map((rate) => (
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

        {/* Maliha Road Branch - Sharjah */}
        <div className="flex items-center justify-center flex-col gap-4 pt-20">
          <Header
          title={ locale === "en" ? "Maliha Road Branch - Sharjah" : "فرع طريق مليحة - الشارقة"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {
              MALIHA_PACKAGES.map((rate) => (
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
    </div>
  )
}

export default SchoolPackages