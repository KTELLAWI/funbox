"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { useLocale } from "next-intl";

export default function BannerSlider() {
const locale = useLocale();
  const images = [
    "/home_banner.jpg",
    "/home_banner1.jpg",
  ];
  return (
    <ImagesSlider className=" h-[540px] md:h-[875px]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <span className="font-school text-[18px] md:text-[24px] font-normal leading-[15px] text-white">{ locale === "en" ? "Welocme to funbox" : "مرحبا بكم في صندوق المرح"}</span>
        <h1 className="text-white text-[32px] md:text-[54px] font-bold leading-[120%] text-center max-w-[600px] mx-auto mt-10 px-5">{ locale === "en" ? "It is time to laugh, play, run and have fun" : "انه وقت الضحك و اللعب والجري والمرح"}</h1>

        <Image src="/sun.png" alt="sun" width={70} height={70} className="absolute top-0 md:top-60 left-4 md:left-32 custom-spin-animation" />

        <Image src="/clouds.png" alt="clouds" width={120} height={120} className="absolute bottom-0 md:top-80 -right-8 md:right-32 custom-spin-animation" />
      </motion.div>
    </ImagesSlider>
  );
}
