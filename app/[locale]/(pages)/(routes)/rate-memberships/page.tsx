// import { RATE_CARDS } from "@/constants"
export const dynamic = "force-dynamic";

import TextBanner from "@/components/text-banner"
import PricingCard from "@/components/pricing-card"
import { getLocale, getTranslations } from "next-intl/server";
import { importConstants } from "@/lib/utils";
type Props = {
  params: { locale: string };
};
const RateMemberships = async({ params: { locale } }: Props) => {
  // const locale =  await getLocale()
  const t = getTranslations();
  const { RATE_CARDS } = await importConstants(locale);
  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/rate_banner.jpeg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">Rate & Memberships</h1>
      </TextBanner>

      {/* Rate Main Content  */}
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <div className="flex items-center justify-center flex-col gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              RATE_CARDS.map((rate) => (
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

export default RateMemberships