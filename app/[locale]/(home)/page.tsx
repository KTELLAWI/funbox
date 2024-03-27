export const dynamic = "force-dynamic";

import BirthdayTime from "./(sections)/birthday-time"
import OurActivities from "./(sections)/our-activities"
import RateAndMemberships from "./(sections)/rate-and-memberships"
import WelcometoFunbox from "./(sections)/welcome-to-funbox"
import BannerSlider from './(sections)/banner-slider';
import FormSection from "./(sections)/FormSection";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
type Props = {
  params: { locale: string };
};
const Home = async({ params: { locale } }: Props) => {
  //unstable_setRequestLocale(locale);

  const lang = useLocale();
 // const t = await getTranslations('NavBar');
 // const t = await getTranslations('NavBar');
  const t = await getTranslations( 'NavBar' as any);
  return (
    <>
      <BannerSlider />
      <WelcometoFunbox />
      <OurActivities />
      <BirthdayTime />
      <RateAndMemberships />
      <FormSection/>
    </>
  )
}

export default Home