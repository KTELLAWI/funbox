import Link from "next/link"
import Image from "next/image"
import TextBanner from "@/components/text-banner"
import { Card, CardFooter } from "@/components/ui/card"
// import { ACTIVITIES_CARDS, ACTIVITIES_FAQS } from "@/constants"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { importConstants } from "@/lib/utils"

type Props = {
  params: { locale: string };
};
// Now, you can use the imported constants
const Activities = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  // const t = getTranslations();
  const { ACTIVITIES_CARDS, ACTIVITIES_FAQS } = await importConstants(locale);
  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/activities.jpg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{ locale === "en" ? "Activities" : "الانشطة"}</h1>
      </TextBanner>

      {/* Activities Main Content  */}
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {
              ACTIVITIES_CARDS.map((data) => (
                <Card
                  key={data.key}
                  className="rounded-lg overflow-hidden border-none shadow-none bg-[#F8F5F0]"
                >
                  <div className="relative">
                    <Image
                      alt="Image"
                      src={data.src}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="w-full h-[200px] md:h-[250px] rounded-md"
                    />
                  </div>
                  <CardFooter className="flex flex-col px-4 py-10">
                    <h1 className="text-[#393d72] text-lg md:text-3xl font-semibold leading-[120%] text-center pb-4">{data.heading}</h1>

                    <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full !leading-[2em] text-center pt-4 md:pt-6">{data.desc}
                    </p>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions  */}
      <div className="bg-[#EDEDED]">
        <div
          className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
        >
          <h1 className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] pb-10 text-center md:text-left">{ locale === "en" ? "Frequently asked Questions" : "الأسئلة المتكررة"}</h1>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {
              ACTIVITIES_FAQS.map((data) => (
                <>
                  <AccordionItem value={data.key}>
                    <AccordionTrigger className='text-[#4b4b4b] text-base md:text-2xl font-semibold p-0 no-underline text-left'>{data.title}</AccordionTrigger>
                    <AccordionContent className="py-2 text-[#858687] text-sm md:text-lg leading-6 md:leading-8 font-medium">
                      {data.desc}
                    </AccordionContent>
                  </AccordionItem>
                </>
              ))
            }
          </Accordion>
        </div>
      </div>

      {/* Movie Banner  */}
      <TextBanner
        imageUrl="/activities_movie.jpg"
        altText="Movie Banner Image"
        className="w-full h-[350px] md:h-[450px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{ locale === "en" ? "Movie Time" : "غرفة السينما"}</h1>
        <p className="text-white text-lg md:text-xl leading-6 md:leading-8 font-medium pb-12 pt-2">{ locale === "en" ? "Enjoy watching your favorite heroes and characters in the movie room" : "استمتع بمشاهدة ابطالك وشخصياتك المفضلة في غرفة السينما"}</p>

        <Link href="contact-us">
          <Button
            variant="secondary"
            size="default"
            className="text-base md:text-xl font-semibold bg-[#f45889] hover:bg-[#de4777]"
          >Contact Us
          </Button>
        </Link>
      </TextBanner>
    </div>
  )
}

export default Activities