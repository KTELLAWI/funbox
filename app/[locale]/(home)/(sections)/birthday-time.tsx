import Link from "next/link"
import { Button } from "@/components/ui/button"
import TextBanner from "@/components/text-banner"
import { getLocale } from "next-intl/server"

const BirthdayTime = async () => {
  const  locale = await getLocale();
  return (
    <section>
      <TextBanner
        imageUrl="/birthday_banner.jpeg"
        altText="Movie Banner Image"
        className="w-full h-[350px] md:h-[550px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{locale === 'en' ?"Birthday Time!":"عيد ميلاد سعيد! 🎉🎂 ما هو وقت الاحتفال؟"}</h1>
        <p className="text-white text-lg md:text-xl leading-6 md:leading-8 font-medium pb-12 pt-2">{locale == 'en' ?"We would love to be a part of your special day, come have your birthday party at Funbox UAE." :"نحن نودّ أن نكون جزءًا من يومكم الخاص، تفضلوا بإقامة حفلة عيد ميلادكم في فن بوكس الإمارات."}</p>

        <Link href="contact-us">
          <Button
            variant="secondary"
            size="default"
            className="text-base md:text-xl font-semibold bg-[#f4b0c7] hover:bg-[#d98fa8]"
          >{locale ==='en'? "Book Now": "احجز الأن"}
          </Button>
        </Link>
      </TextBanner>
    </section>
  )
}

export default BirthdayTime