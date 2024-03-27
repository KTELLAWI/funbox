import Link from "next/link";
import Header from "@/components/header";
import { RATE_CARDS } from "@/constants"
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/pricing-card";
import { getLocale } from "next-intl/server";
import { importConstants } from "@/lib/utils";

const RateAndMemberships =async () => {
  const locale =  await getLocale()
  // const t = getTranslations();
  const { RATE_CARDS } = await importConstants(locale);

  return (
    <section className="bg-white">
      <div
        className="relative flex items-center justify-center flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <Header
          title={ locale === "en" ? "Prices & Memberships" : "الأسعار والعضويات"}
          className="text-[#393d72] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
        />

        {/* Rate Cards */}
        <div
          className="relative flex flex-col mx-auto pt-8 md:pt-16 pb-16 md:pb-28"
        >
          <div className="flex items-center justify-center flex-col gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {
                RATE_CARDS.slice(0, 3).map((rate) => (
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

        {/* View Packages Button  */}
        <Link href="rate-memberships">
          <Button
            variant="secondary"
            size="default"
            className="text-base md:text-xl font-semibold bg-[#f99c5e] hover:bg-[#f19b61]"
          >{ locale === "en" ? "View All Packages More" : "عرض جميع الباقات"}
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default RateAndMemberships