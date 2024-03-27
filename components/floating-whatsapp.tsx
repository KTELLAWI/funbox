// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import { useEffect, useState } from "react";
// import client from "@/lib/directus";
// import { readItem, readItems } from "@directus/sdk";

// const FloatingWhatsapp = () => {
// const [visible,setVisible ] = useState(false);

//   useEffect(() => {
//     console.log("dddddd")
//     const isTimeInRange = (startHour: number, endHour: number): boolean => {
//       const now = new Date();
//      // Add 4 hours to get UAE time
//      const currentHour = now.getUTCHours() + 4;
//      const currentMinute = now.getUTCMinutes();
//      // Convert 12:30 PM UAE time to minutes (12 hours + 30 minutes)
//      const endHourInMinutes = 18 * 60 + 30;
//      // Convert current time to minutes
//      const currentTimeInMinutes = currentHour * 60 + currentMinute;
//      return currentHour >= startHour && currentTimeInMinutes <= endHourInMinutes && currentHour < endHour;
//     };

//     const updateLogoVisibility = () => {
//       setVisible(isTimeInRange(9, 18.30));
//       console.log("ddddddddddddddddddddddddddddddddd")
//     };

//     updateLogoVisibility();

//     // Update the logo visibility every minute
//     const intervalId = setInterval(updateLogoVisibility, 60000);

//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <div className="fixed bottom-5 right-5 z-20">
//       {visible ? (
//       <HoverCard openDelay={0}>
//         <HoverCardTrigger className="cursor-pointer">
//           <Link href="https://api.whatsapp.com/send/?phone=971566096200&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" legacyBehavior>
//             <Image src="/whatsapp-icon.png" width={50} height={50} alt="Whatsapp" />
//           </Link>
//         </HoverCardTrigger>
//         <HoverCardContent className="w-fit">
//           Whatapp us
//         </HoverCardContent>
//       </HoverCard>
//       ) : null}

//     </div>
//   )
// }

// export default FloatingWhatsapp

"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import client from "@/lib/directus";
import { readItems } from "@directus/sdk";

interface WhatsappSettings {
  Whatsapp_start: string;
  Whatsapp_end: string;
  Whatsapp_status: boolean;
}

const FloatingWhatsapp = () => {


  const [showWhatsapp, setShowWhatsapp] = useState(false);
//   const getWhatsappSettings2 = async () => {
//     //try {
//       const result = await client.request(
//         readItems("settings", {
//           fields: ["start_time", "end_time", "disabled"],
//           limit: 1,
//         })
//       )
//      // }
//     };
// const bb = await getWhatsappSettings2();

  useEffect(() => {
  //   async function getwhatsapp ():WhatsappSettings {
  //     try {
  //       return client.request(
  //     readItems("settings", {
  //       fields: ["Whatsapp_start", "Whatsapp_end", "Whatsapp_status"],
  //     })
  //   ) ;
  //     }
  //     catch(error){
  //       console.log(error);
  
  //     }
    
  // }
  async function getwhatsapp(): Promise<WhatsappSettings> {
    try {
        const result : any= await client.request(
            readItems("settings", {
                fields: ["Whatsapp_start", "Whatsapp_end", "Whatsapp_status"],
            })
        );

        // Ensure result is not undefined before attempting to destructure it
        if (!result) {
            throw new Error("Settings not found"); // or handle the case where settings are not found
        }

        const { Whatsapp_start, Whatsapp_end, Whatsapp_status }  = result ;
        
        return {
            Whatsapp_start,
            Whatsapp_end,
            Whatsapp_status
        };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Whatsapp settings"); // or handle the error appropriately
    }
}

    


const getWhatsappSettings = async () => {
  try {
    const result:WhatsappSettings = await  getwhatsapp();
// console.log("resulllllllllllllllllllllll",result);
const { Whatsapp_start, Whatsapp_end, Whatsapp_status } = result! ;

        const isTimeInRange = (start_time:string, end_time:string) => {
          const now = new Date();
          const currentHour = now.getUTCHours() + 4; // Adding 4 hours to get UAE time
          // console.log("jhhhhhhhhhhhhhhhh",currentHour);
          const currentMinute = now.getUTCMinutes();
          const currentTimeInMinutes = currentHour * 60 + currentMinute;
          
          // Convert start and end times to minutes
          const startTimeInMinutes = parseInt(start_time.split(":")[0]) * 60 + parseInt(start_time.split(":")[1]);
          const endTimeInMinutes = parseInt(end_time.split(":")[0]) * 60 + parseInt(end_time.split(":")[1]);
        
          return currentHour >= parseInt(start_time.split(":")[0]) &&
            currentTimeInMinutes <= endTimeInMinutes &&
            currentHour < parseInt(end_time.split(":")[0]);
        };
        

        const updateLogoVisibility = () => {
          const showButton = isTimeInRange(Whatsapp_start, Whatsapp_end) && Whatsapp_status;
          // console.log(showButton);
          setShowWhatsapp(showButton);
        };

//Set start time and end time
        
       updateLogoVisibility();

        //Update the logo visibility every minute
        const intervalId = setInterval(updateLogoVisibility, 60000);

       return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching WhatsApp settings:", error);
      }
    };
  
   getWhatsappSettings();
  }, []);

// Log message to the console when the component renders

  return (
    <div className="fixed bottom-5 right-5 z-20">
      
      {showWhatsapp && (
        // <HoverCard openDelay={0}>
        //   <HoverCardTrigger className="cursor-pointer">
            <a
              href="https://api.whatsapp.com/send/?phone=971566096200&text&type=phone_number&app_absent=0"
              target="_blank"
              // rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp-icon.png"
                width={50}
                height={50}
                alt="Whatsapp"
              />
            </a>
        //   </HoverCardTrigger>
        //   <HoverCardContent className="w-fit">Whatapp us</HoverCardContent>
        // </HoverCard>
      )}
    </div>
  );
};

export default FloatingWhatsapp;

// import React, { useEffect, useState } from "react";
// import client from "@/lib/directus";
// import { readItems } from "@directus/sdk";


// interface WhatsappSettings {
//   Whatsapp_start: string;
//   Whatsapp_end: string;
//   Whatsapp_status: boolean;
// }

// const FloatingWhatsapp = () => {
//   const [showWhatsapp, setShowWhatsapp] = useState(false);

//   useEffect(() => {
//     const getWhatsappSettings = async () => {
//       try {
//         const result= await client.request(
//           readItems("settings", {
//             fields: ["Whatsapp_start", "Whatsapp_end", "Whatsapp_status"],
//           })
//         ) ;
//           const { Whatsapp_start, Whatsapp_end, Whatsapp_status } = result;
//        console.log("wwwwwwwwwwwwww",result);
//         //if (Array.isArray(result) && result.length > 0) {
//           //const { Whatsapp_start, Whatsapp_end, Whatsapp_status } = result;

//           const isTimeInRange = (start_time:String, end_time:string) => {
//             const now = new Date();
//             const currentHour = now.getUTCHours() + 4; // Adding 4 hours to get UAE time
//             const currentMinute = now.getUTCMinutes();
//             const currentTimeInMinutes = currentHour * 60 + currentMinute;
          
//             // Convert start and end times to minutes
//             const startTimeInMinutes = parseInt(start_time.split(":")[0]) * 60 + parseInt(start_time.split(":")[1]);
//             const endTimeInMinutes = parseInt(end_time.split(":")[0]) * 60 + parseInt(end_time.split(":")[1]);
          
//             return currentHour >= parseInt(start_time.split(":")[0]) &&
//               currentTimeInMinutes <= endTimeInMinutes &&
//               currentHour < parseInt(end_time.split(":")[0]);
//           };

//           const updateLogoVisibility = () => {
//             const showButton = isTimeInRange(Whatsapp_start, Whatsapp_end) && Whatsapp_status;
//             setShowWhatsapp(showButton);
//           };

//           // Set start time and end time
//           updateLogoVisibility();

//           // Update the logo visibility every minute
//           const intervalId = setInterval(updateLogoVisibility, 60000);
//           return () => clearInterval(intervalId);
//        // } else {
//           // Handle the case when result is an empty array
//         ///  console.error("No WhatsApp settings found");
//        /// }
//    } 
//    catch 
//    (error) {
//         console.error("Error fetching WhatsApp settings:", error);
//      }
  
    
//     getWhatsappSettings();
//   }
//   }, []);

//   return (
//     <div className="fixed bottom-5 right-5 z-20">
//       {showWhatsapp && (
//         <HoverCard openDelay={0}>
//           <HoverCardTrigger className="cursor-pointer">
//             <Link
//               href="https://api.whatsapp.com/send/?phone=971566096200&text&type=phone_number&app_absent=0"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src="/whatsapp-icon.png"
//                 width={50}
//                 height={50}
//                 alt="Whatsapp"
//               />
//             </Link>
//           </HoverCardTrigger>
//           <HoverCardContent className="w-fit">Whatapp us</HoverCardContent>
//         </HoverCard>
//       )}
//     </div>
//   );
// };

// export default FloatingWhatsapp;
