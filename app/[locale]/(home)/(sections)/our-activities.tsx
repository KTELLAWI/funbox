import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
// import { ACTIVITIES_CARDS } from "@/constants"
import { getLocale } from "next-intl/server"
import { importConstants } from "@/lib/utils"

const OurActivities = async() => {
  const locale =  await getLocale()
  // const t = getTranslations();
  const { ACTIVITIES_CARDS } = await importConstants(locale);

  return (
    <section className="bg-[#f9f5f0]">
      <div
        className="relative flex items-center justify-center flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <Header
         title={ locale === "en" ? "Activities" : "الانشطة"}
          className="text-[#393d72] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
        />

        {/* Activities Cards */}
        <div
          className="relative flex flex-col mx-auto max-w-[1280px] pt-8 md:pt-16"
        >
          <div className="flex items-center justify-center flex-col gap-6 md:gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {
                ACTIVITIES_CARDS.map((data) => (
                  <Card
                    key={data.key}
                    className="rounded-lg overflow-hidden border-none shadow-none bg-[#F8F5F0]"
                  >
                    <div className="relative cursor-pointer group">
                      <Image
                        alt="Image"
                        src={data.src}
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full h-[200px] md:h-[300px] rounded-md relative transform transition-all ease-in-out duration-1000 md:group-hover:scale-x-0"
                      />

                      <div
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-50 rounded-md md:group-hover:bg-[#EBEBEB]"
                      />

                      <h1 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-xl md:text-3xl font-semibold leading-[120%] text-center pb-4 md:group-hover:opacity-0">
                        {data.heading}
                      </h1>

                      {/* CardFooter Content */}
                      <CardFooter className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 py-10 transform scale-x-0 opacity-0 md:group-hover:scale-x-100 md:group-hover:opacity-100 transition-all ease-in-out duration-1000">
                        <h1 className="text-black text-lg md:text-xl font-semibold leading-[120%] text-center">
                          {data.heading}
                        </h1>
                        <p className="font-rubik text-[#858687] text-sm md:text-sm font-normal w-full !leading-[1.5em] text-center pt-4 md:pt-3">
                          {data.desc}
                        </p>
                      </CardFooter>
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>

        {/* Discover Button  */}
        <Link href="activities" className="mt-14 md:mt-20">
          <Button
            variant="secondary"
            size="default"
            className="text-base md:text-xl font-semibold bg-[#5798fe] hover:bg-[#4683e6]"
          >{ locale === "en" ? "Discover More" : "اكتشف المزيد"}
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default OurActivities