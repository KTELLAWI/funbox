export const dynamic = "force-dynamic";

import axios from 'axios';
import TextBanner from "@/components/text-banner"
import { readItem, readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';
import client from '@/lib/directus';
import { unstable_setRequestLocale } from 'next-intl/server';


interface Props{
  params:{
    slug:string;
    locale:string
  }
}
// async function getPost(slug:string) {
// 	try {
// 		const post = await client.request(
// 			readItem('blogs', slug, {
// 				fields: ['*', { image: ['filename_disk'], author: ['name'] }],
// 			})
// 		);

// 		return post;
// 	} catch (error) {
// 		notFound();
// 	}
// }
async function getPosts(locale:string,slug:string) {

  
  try {
        // @ts-ignore
    return client.request(readItems('blogs',
     {
      deep: {
        translations: {
          _filter: {
            _and: [
              {
                languages_code: { _eq: locale },
              },
              {
                slug: { _eq: decodeURIComponent(slug) },
              },
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


const BlogsId = async  ({ params: { slug,locale } }: Props) => {
	// const post = await getPost(slug);

  const post = await getPosts(locale,slug);

  // //unstable_setRequestLocale(locale);

//  console.log("Posttttttttttttttttt2",decodeURIComponent(slug));
  return (
    
    // <h1>yyy</h1>
    <div>
      {/* Text Banner  */}
      <TextBanner
        imageUrl="/blogpages_banner.jpg"
        altText="Banner Image"
        className="w-full h-[350px] md:h-[400px]"
      >
        <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[120%] text-center">Blog</h1>
      </TextBanner>

      {/* Blogs Main Content  */}
      <div
        className="relative flex flex-col mx-auto max-w-[1280px] px-5 lg:px-8 py-16 md:py-28"
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="w-full">
            <div key={post[0].translations[0].slug}>
              <div className="flex flex-col px-4 py-10">
                <h1 className="text-[#393d72] text-lg md:text-3xl font-semibold leading-[120%] text-center pb-4">
                  {post[0].translations[0].title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: post[0].translations[0].content }}></div>
                {/* <img src={`https://api.funbox.yhh.ae/assets/${post.image.filename_disk}?access_token=JuHOR8WnzLwsDbWKlVlnY2PO7GMLM1Kh`} alt="" width={300} /> */}

                {/* {post.attributes?.Description.map((paragraph: any, index: any) => (
                  <p
                    key={index}
                    className="font-rubik text-[#858687] text-sm md:text-base font-normal w-full !leading-[2em] text-center pt-4 md:pt-6"
                  >
                    {paragraph.children[0].text}
                  </p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsId