export const dynamic = 'force-static'

import Image from "next/image"
import Header from "@/components/header"
// import { ABOUT_CARDS } from "@/constants"
import TextBanner from "@/components/text-banner"
import { Card, CardFooter } from "@/components/ui/card"
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { importConstants } from "@/lib/utils"
type Props = {
  params: { locale: string };
};
const AboutUs = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

const t = await getTranslations("PageParagraph" as any);
const { ABOUT_CARDS } = await importConstants(locale);
  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/about_banner.jpg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{locale === "en " ? "About us" : "عن صندوق المرح"}</h1>
      </TextBanner>

      {/* About Main Content  */}
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <Header
            title={locale === 'en'? "It’s time to laugh, play, run and have fun." :"انه وقت الضحك و اللعب والجري و المرح            "}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full !leading-[2em] text-center pt-10"> {t(`welcometofunbox1` as never)}<br /><br />
          {t(`welcometofunbox2` as never)}
          </p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 pt-20">
          <Header
            title={ locale === "en" ? "Activities" : "الانشطة"}
            className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10">
            {
              ABOUT_CARDS.map((data) => (
                <Card
                  key={data.key}
                  className="rounded-lg overflow-hidden border-none shadow-none"
                >
                  <div className="relative">
                    <Image
                      alt="Image"
                      src={data.src}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="w-full h-[300px] md:h-[400px] rounded-md"
                    />
                  </div>
                  <CardFooter className="flex flex-col px-4 py-10">
                    <h1 className="text-[#ff4880] text-lg md:text-3xl font-semibold leading-[120%] text-center pb-4">{data.heading}</h1>
                    <Image src="/separator.png" alt="separator" width={80} height={80} priority />

                    <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full !leading-[2em] text-center pt-6">{data.desc}
                    </p>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs