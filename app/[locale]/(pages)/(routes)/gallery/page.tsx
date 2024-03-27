export const dynamic = "force-dynamic";

import TextBanner from "@/components/text-banner"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import client from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const images = [
  "/gallery_img.jpg",
  "/gallery_img1.jpeg",
  "/gallery_img2.jpeg",
  "/gallery_img3.jpeg",
  "/gallery_img4.jpeg",
  "/gallery_img5.jpeg",
  "/gallery_img6.jpeg",
  "/gallery_img7.jpeg",
  "/gallery_img8.jpeg",
  "/gallery_img9.jpeg",
  "/gallery_img10.jpeg",
  "/gallery_img11.jpeg",
  "/gallery_img12.jpeg",
  "/gallery_img13.jpeg",
  "/gallery_img14.jpeg",
  "/gallery_img15.jpeg",
  "/gallery_img16.jpeg",
  "/gallery_img17.jpeg",
  "/gallery_img18.jpeg",
  "/gallery_img19.jpeg",
  "/gallery_img20.jpeg",
  "/gallery_img21.jpeg",
  "/gallery_img22.jpeg",
  "/gallery_img23.jpeg",
  "/gallery_img24.jpeg",
  "/gallery_img25.jpeg",
  "/gallery_img26.jpeg",
  "/gallery_img27.jpeg",
  "/gallery_img28.jpeg",
  "/gallery_img29.jpeg",
  "/gallery_img30.jpeg",
  "/gallery_img31.jpeg",
  "/gallery_img32.jpeg",
  "/gallery_img33.jpeg",
  "/gallery_img34.jpeg",
  "/gallery_img35.jpeg",
  "/gallery_img36.jpeg",
  "/gallery_img37.jpeg",
  "/gallery_img38.jpeg",
  "/gallery_img39.jpeg",
  "/gallery_img40.jpeg",
  "/gallery_img41.jpeg",
  "/gallery_img42.jpeg",
  "/gallery_img43.jpeg",
  "/gallery_img44.jpeg",
  "/gallery_img45.jpeg",
  "/gallery_img46.jpeg",
  "/gallery_img47.jpeg",
  "/gallery_img48.jpeg",
  "/gallery_img49.jpeg",
  "/gallery_img50.jpeg",
  "/gallery_img51.jpeg",
  "/gallery_img52.jpeg",
  "/gallery_img53.jpeg",
  "/gallery_img54.jpeg",
  "/gallery_img55.jpeg",
  "/gallery_img56.jpeg",
  "/gallery_img57.jpeg",
  "/gallery_img58.jpeg",
  "/gallery_img59.jpeg",
  "/gallery_img60.jpeg",
  "/gallery_img61.jpeg",
  "/gallery_img62.jpeg",
  "/gallery_img63.jpeg",
  "/gallery_img64.jpeg",
  "/gallery_img65.jpeg",
  "/gallery_img66.jpeg",
  "/gallery_img67.jpeg",
  "/gallery_img68.jpeg",
  "/gallery_img69.jpeg",
  "/gallery_img70.jpeg",
  "/gallery_img71.jpeg",
  "/gallery_img72.jpeg",
  "/gallery_img73.jpeg",
  "/gallery_img74.jpeg",
  "/gallery_img75.jpeg",
];
type Props = {
  params: { locale: string };
};
// async function getPosts(locale:string) {
  
//   try {
//     return client.request(readItems('gallery_files',
//      {
//       // deep: {
//       //   translations: {
//       //     _filter: {
//       //       _and: [
//       //         {
//       //           languages_code: { _eq: locale },
//       //         },
//       //         // {
//       //         //   slug: { _eq: slug },
//       //         // },
//       //       ],
//       //     },
//       //   },
//       // },
//       //fields: ['slug', 'title', 'publish_date', 'image', { author: ['name'] }],
//        fields: ['*', { translations: ['*'] }],
//        //sort: ['-publish_date'],
//     }
//     )
//     );
//   } catch (error) {
//     notFound();
//   }

// }
const Gallery = async ({ params: { locale } }: Props) => {
  //unstable_setRequestLocale(locale);
  // const blogs = await getPosts(locale);
  // console.log("posts", blogs)


  return (
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/gallery_banner.jpg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">{locale == "en" ? "Our Gallery" : "الصور"}</h1>
      </TextBanner>

      {/* Gallery Main Content  */}
      <div
        className="relative flex items-center justify-center mx-auto md:max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <Tabs defaultValue="all" className="flex items-center justify-center flex-col px-5 md:px-0">
          <TabsList className="mb-8 md:mb-20">
            <TabsTrigger value="all">{locale == "en" ? "all" :"الكل"}</TabsTrigger>
            <TabsTrigger value="birthday">{locale == "en" ? "birthday" :"أعياد ميلاد"}</TabsTrigger>
            <TabsTrigger value="activities">{locale == "en" ? "activities" :"أنشطة"}</TabsTrigger>
            <TabsTrigger value="celebrations">{locale == "en" ? "celebrations" :"احنفالات اخرى"}</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ParallaxScroll images={images} />
          </TabsContent>
          <TabsContent value="birthday">
            <ParallaxScroll images={images} />
          </TabsContent>
          <TabsContent value="activities">
            <ParallaxScroll images={images} />
          </TabsContent>
          <TabsContent value="celebrations">
            <ParallaxScroll images={images} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Gallery