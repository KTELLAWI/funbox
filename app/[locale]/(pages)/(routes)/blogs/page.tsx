import axios from "axios";
import Link from "next/link";
import TextBanner from "@/components/text-banner";
import { Card, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import client from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image"
import { notFound } from "next/navigation";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params:{
    locale:string
  }
}
//   async function whatsapp() {
//     try {
//       return client.request(
//     readItems("settings", {
//       fields: ["Whatsapp_start", "Whatsapp_end", "Whatsapp_status"],
//     })
//   )
//     }
//     catch(error){
//       console.log(error);

//     }
  
// }


async function getPosts(locale:string) {
  
  try {
    return client.request(readItems('blogs',
     {
      deep: {
        translations: {
          _filter: {
            _and: [
              {
                languages_code: { _eq: locale },
              },
              // {
              //   slug: { _eq: slug },
              // },
            ],
          },
        },
      },
      //fields: ['slug', 'title', 'publish_date', 'image', { author: ['name'] }],
       fields: ['*', { translations: ['*'] }],
       //sort: ['-publish_date'],
    }
    )
    );
  } catch (error) {
    notFound();
  }

}
export default async function Page({params:{locale}}:Props) { 
  unstable_setRequestLocale(locale);

  // console.log("parammmmmmmmmmmmmmmmmmmm",locale);
  //const [blogs, setBlogs] = useState([]);
  const blogs = await getPosts(locale);
  // const wa = await whatsapp();
//  const local = getLocale();
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  //       },
  //     })
  //     .then((res) => {
  //       setBlogs(res.data);
  //     });
  // }, []);
  console.log("posts", blogs)
//  console.log("wwwwwwwwwww",wa);
  return (

    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/blog_banner.jpeg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">
          {locale === "en" ? "Blogs" :"المدونة"}
        </h1>
      </TextBanner>

      {/* Blogs Main Content  */}
      <div className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28">
        <div className="flex items-center justify-start flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {blogs?.map((blog, index) => (
              <>
                <Link href={`blogs/${blog?.translations[0].slug}`} key={index}>
                  <Card className="rounded-lg overflow-hidden border-none shadow-none bg-[#F8F5F0]">
                    <div className="relative">
                      <Image
                      // todo // replace token with env.proccess
                     //src="https://solid-potato-gw75gpr94pcj4q-3000.app.github.dev/_next/image?url=%2Fblogpages_banner.jpg&w=3840&q=75" alt=""
                       src={`https://api.funbox.yhh.ae/assets/${blog.image}?access_token=JuHOR8WnzLwsDbWKlVlnY2PO7GMLM1Kh`} alt=""
                        width={100}
                        height={100}
                        sizes="100%"
                        className="w-full h-[200px] md:h-[250px] rounded-md"
                      />
                    </div>
                    <CardFooter className="flex flex-col px-4 py-10">
                      <h1 className="text-[#393d72] text-lg md:text-2xl font-semibold leading-[120%] text-center pb-4">
                        {blog.translations[0].title}
                      </h1>
                      {/* <div dangerouslySetInnerHTML={{ __html: blog.content }}></div> */}
                      {/* {blog.attributes.Description.map(
                        (paragraph: any, index: any) => (
                          <p
                            key={index}
                            className="font-rubik text-[#858687] text-sm md:text-base font-normal w-full !leading-[2em] text-center pt-4 md:pt-6"
                          >
                            {paragraph.children[0].text.length > 200
                              ? paragraph.children[0].text.substring(0, 200) +
                              "..."
                              : paragraph.children[0].text}
                          </p>
                        )
                      )} */}
                    </CardFooter>
                  </Card>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

