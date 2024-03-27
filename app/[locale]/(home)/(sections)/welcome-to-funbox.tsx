import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import VideoModal from "@/components/VideoModal"
import { getLocale, getTranslations } from "next-intl/server"

const WelcometoFunbox = async() => {
  const locale = await getLocale();
  const t = await getTranslations("PageParagraph" as any);
  return (
    <section className="bg-white">
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <Header
          title={ locale === "en" ? "Welcome to Funbox" : "مرحبا بكم في صندوق المرح"}
          className="text-[#ff4880] text-[32px] md:text-[48px] font-bold leading-[120%] text-center"
        />

        <div className="w-full flex items-start justify-between flex-col md:flex-row gap-14 md:gap-0 pt-20">
        {/* <iframe  width="540" height="400" src="https://www.youtube.com/embed/B_DPb25Zkd8" title="Welcome to Fun Box مرحباً بكم في صندوق المرح" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <Image src="/welcomeImg.jpg" alt="funbox" width={540} height={400} priority /> */}
          <VideoModal
          thumbnailSrc="/welcomeImg.jpg"
          videoSrc="https://youtu.be/B_DPb25Zkd8"

          />
          <div className="flex flex-col gap-5 w-full md:w-[680px]">
            <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full md:w-[600px] !leading-[2em]">{t('welcometofunbox1')}</p>
            <p className="font-rubik text-[#858687] text-sm md:text-lg font-normal w-full md:w-[600px] !leading-[2em] pt-8 pb-12">{t('welcometofunbox2')}</p>

            <Link href="about-us">
              <Button
                variant="secondary"
                size="default"
                className="text-base md:text-xl font-semibold"
              >{ locale === "en" ? "Discover More" : "اكتشف المزيد"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcometoFunbox