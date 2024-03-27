import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

export interface SocialLink {
  href: string;
  key: string;
  icon: React.ElementType;
  iconColor?: string;
  bgColor: string;
}

export interface NavLink {
  href: string;
  key: string;
  label: string;
  locale:string,
}

export interface AboutCard {
  key: string;
  src: string;
  heading: string;
  desc: string;
}

export interface PartyBenefits {
  key: string;
  src: string;
  desc: string;
}

export interface ContactDetails {
  key: string;
  icon: React.ElementType;
  iconColor?: string;
  bgColor: string;
  desc: string;
}

export interface ActivitiesCard {
  key: string;
  src: string;
  heading: string;
  desc: string;
}

export interface BlogCard {
  key: string;
  src: string;
  heading: string;
  desc: string;
}

export interface ActivitiesFAQs {
  key: string;
  title: string;
  desc: string;
}

interface RateCards {
  key: string;
  plan: string;
  price: string;
  features: string[];
  bgColor: string;
  btnColor: string;
}

interface PartyPackages {
  key: string;
  plan: string;
  price: string;
  features: string[];
  bgColor: string;
  btnColor: string;
}

interface MatajerPackages {
  key: string;
  plan: string;
  price: string;
  features: string[];
  bgColor: string;
  btnColor: string;
}

interface MalihaPackages {
  key: string;
  plan: string;
  price: string;
  features: string[];
  bgColor: string;
  btnColor: string;
}

interface ContactLink {
  key: string;
  icon: React.ElementType;
  iconColor?: string;
  text: string;
}

// ABOUT CARDS
export const ABOUT_CARDS: AboutCard[] = [
  {
    key: "1",
    src: "/about_indoor_1.jpeg",
    heading: "Indoor playground",
    desc: "Indoor playground area that includes different games",
  },
  {
    key: "2",
    src: "/about_indoor_2.jpeg",
    heading: "Party Hall",
    desc: "Full service party hall including Movie Room and parents setting area (Majlis)",
  },
];

// PARTY BENEFITS
export const PARTY_BENEFITS: PartyBenefits[] = [
  {
    key: "1",
    src: "/party_icon1.png",
    desc: "Brand new modern event space that can accommodate up to 50 people.",
  },
  {
    key: "2",
    src: "/party_icon2.png",
    desc: "Flexible Room Set Ups",
  },
  {
    key: "3",
    src: "/party_icon3.png",
    desc: "Stage",
  },
  {
    key: "4",
    src: "/party_icon4.png",
    desc: "Movie Room",
  },
  {
    key: "5",
    src: "/party_icon5.png",
    desc: "Majlis",
  },
  {
    key: "6",
    src: "/party_icon6.png",
    desc: "Kids Menu",
  },
];

// CONTACT DETAILS
export const CONTACT_DETAILS: ContactDetails[] = [
  {
    key: "1",
    icon: FaPhoneAlt,
    iconColor: "text-white",
    bgColor: "#ffae00",
    desc: "Maliha branch : (06) 546 9577\nMatajir Al Mirgab branch : (06) 521 9165",
  },
  {
    key: "2",
    icon: LuMail,
    iconColor: "text-white",
    bgColor: "#ff4880",
    desc: "	info@funboxuae.ae",
  },
  {
    key: "3",
    icon: FaLocationDot,
    iconColor: "text-white",
    bgColor: "#5798fe",
    desc: "Maliha Road Branch\nMatajer Al Mirgab branch",
  },
];

// PARTY PACKAGES
export const PARTY_PACKAGES: PartyPackages[] = [
  {
    key: "1",
    plan: "Parties package",
    price: "1000 dhs for 12 kids",
    bgColor: "#FDEBEA",
    btnColor: "#ffae00",
    features: [
      "Entries to the indoor playground including magic lab, dynamic slide and trampoline, adventure bunny game, magic drawing etc.",
      "Decorating a stand with balloons",
      "Tables and chairs",
      "Entertaining games and activities for kids",
    ],
  },
  {
    key: "2",
    plan: "School packages",
    price: "50 dhs per child for 2 hours",
    bgColor: "#F2F8ED",
    btnColor: "#3d87ff",
    features: [
      "Magic Drawing",
      "Magic Ball Area",
      "Interactive Games",
      "Soft Games",
      "Adventure Bunny Game",
      "Magic Lab",
    ],
  },
];

// MATAJER PACKAGES prices
export const MATAJER_PACKAGES: MatajerPackages[] = [
  {
    key: "1",
    plan: "One hour Access",
    price: "52.5 AED per child (including vat)",
    bgColor: "#F2F8ED",
    btnColor: "#62bc21",
    features: [],
  },
  {
    key: "2",
    plan: "2nd hour",
    price: "21 AED per child (including vat)",
    bgColor: "#EEF4FF",
    btnColor: "#3d87ff",
    features: [],
  },
  {
    key: "3",
    plan: "3rd hour",
    price: "10.5 AED per child (including vat)",
    bgColor: "#EEF4FF",
    btnColor: "#ffae00",
    features: [],
  },

];

// MATAJER PACKAGES pricess
export const MALIHA_PACKAGES: MalihaPackages[] = [
  {
    key: "1",
    plan: "One Day Access",
    price: "70 AED per child",
    bgColor: "#FDEBEA",
    btnColor: "#3d87ff",
    features: [
      "Enables kids to use all our facilities, which include indoor playground and using the Majlis (parents setting area) for 2 hours.",
      "The additional cost for each extra hour beyond the initial two hours is 10 AED.",

      
    ],
  },
  {
    key: "2",
    plan: "Fun Package",
    price: "90 AED per child",
    bgColor: "#EEF4FF",
    btnColor: "#3d87ff",
    features: [
      "Enables kids to use all our attractions, which include indoor playground and using the Majlis (parents setting area) for 3 hours and choose one of our fun workshops.",
    ],
  },
  // {
  //   key: "3",
  //   plan: "School Package",
  //   price: "60 AED per child",
  //   bgColor: "#EEF4FF",
  //   btnColor: "#3d87ff",
  //   features: [
  //     "Entry to the playground for 3 Hours",
      
  //     "Use the cinema hall and choose one cartoon movie from a selection of movies",
  //     "Recreational and educational activities",
  //     "Popcorn and juice",
  //     "Special socks for playing (anti slip socks)",
  //   ],
  // },
];

// ACTIVITIES CARDS
export const ACTIVITIES_CARDS: ActivitiesCard[] = [
  {
    key: "1",
    src: "/activites_Img1.jpeg",
    heading: "Dynamic Ground",
    desc: "This is a ground interactive projection exhibition, a real interaction between the child and the projection on the ground. We use the advanced computer technology and projection technology to create a magical interactive experience. This system can produce variety of special effects, and the experiencer can participate in the interaction with joy. Suitable for kids age 3-12",
  },
  {
    key: "2",
    src: "/activites_Img2.jpeg",
    heading: "Magic Drawing",
    desc: "Children could choose which animals such as fish, forest & farm animals they like, and paint with different colorful pens or puzzel them. After that, the unique animal will appear magically on the smart screen. Gently touch it, the animal will run away! This game combine the traditional painting class with innovative technology. Kids could free their imagination by creating their own animal.",
  },
  {
    key: "3",
    src: "/activites_Img3.jpeg",
    heading: "Crazy Magic Ball",
    desc: "Children pick the ball and throw them to the large screen and hit the targets in order to get enough scores. It’s very exciting and full of challenges. Crazy magic ball is suitable for kids age 3-12",
  },
  {
    key: "4",
    src: "/activites_Img4.jpeg",
    heading: "Dynamic Trampoline",
    desc: "Trampoline game is a traditional and well known game which deeply loved by kids. The game can promote children’s muscle, bone growth and development, help to improve physical coordination. Dynamic Trampoline is a series of games specially designed for children aged 3-12, the product combines light and shadow technology with traditional trampoline playing method",
  },
  {
    key: "5",
    src: "/activites_Img5.jpeg",
    heading: "Dynamic Slide",
    desc: "Slide is an interesting and stimulus game. It is loved by all the kids. Slide not only can exercise kid’s Brave and firm character, but also can promote the feeling of the space and distance, Dynamic slide is a series of games specially designed for children aged 3-12 according to their hobbies",
  },
  {
    key: "6",
    src: "/activites_Img6.jpeg",
    heading: "Magic lab",
    desc: "Magic Lab is a multi-touch interactive game that digitizes traditional wall games and supports children as they create graphic structures through hand-painted graffiti which enhances their creativity.",
  },
  {
    key: "7",
    src: "/activites_Img7.jpeg",
    heading: "Adventure Bunny",
    desc: "Adventure Bunny is based on interactive floor tiles creating cute cartoon images through digital tech to interact via jumping which is entertaining as well as builds their physical coordination capability.",
  },
];

// ACTIVITIES CARDS
export const BLOG_CARDS: BlogCard[] = [
  {
    key: "1",
    src: "/activites_Img1.jpeg",
    heading: "FunBox UAE: Revolutionizing Kids Play with Interactive Gaming",
    desc: "This is a ground interactive projection exhibition, a real interaction between the child and the projection on the ground. We use the advanced computer technology and projection technology to create a magical interactive experience. This system can produce variety of special effects, and the experiencer can participate in the interaction with joy. Suitable for kids age 3-12",
  },
];

// RATE CARDS
export const RATE_CARDS: RateCards[] = [
  {
    key: "1",
    plan: "VIP birthday party package",
    price: "2800 dhs for 15 kids",
    bgColor: "#FDEBEA",
    btnColor: "#ffae00",
    features: [
      "Reserve the hall for 3 hours Party theme",
      "Decorating the hall and entrance with balloons (approximately 200 balloons)",
      "Tables and chairs with decoration according to the theme",
      "Plates, cups, hats, and other party supplies",
      "Cake table decoration",
      "Pop corn",
      "Kids’ meals (to be chosen from the available menus)",
      "Games and activities for children",
      "Film screening in the cinema hall (choose one film from the available movie collection)",
      "Free entry to the indoor play ground including(magic painting , dynamic slide , crazy magic ball, dynamic trampoline and other interactive games)",
      "Use of Majlis Hall for Parents with free coffee",
      "What distinguishes us is a 3D model for the name of the party owner with the lighting",
    ],
  },
  // {
  //   key: "2",
  //   plan: "Gold birthday party package",
  //   price: "2300 dhs for 15 kids",
  //   bgColor: "#F2F8ED",
  //   btnColor: "#62bc21",
  //   features: [
  //     "Reserve the hall for 3 hours",
  //     "Decorating the hall and entrance with balloons (approximately 100 balloons)",
  //     "Tables and chairs",
  //     "Popcorn",
  //     "Games and activities for kids",
  //     "Free entry to the indoor playground including (magic painting, dynamic slide, crazy magic ball, dynamic trampoline)",
  //     "Use of Majlis Hall for parents with free coffee",
  //   ],
  // },
  // {
  //   key: "3",
  //   plan: "Graduation party package",
  //   price: "2300 dhs for 20 people",
  //   bgColor: "#EEF4FF",
  //   btnColor: "#3d87ff",
  //   features: [
  //     "Reserve the hall for 4 hours",
  //     "Decoration the entrance and hall with graduation theme",
  //     "Tables and chair decorated with graduation theme",
  //     "Use of Majlis Hall for parents with free coffee",
  //   ],
  // },
  // {
  //   key: "4",
  //   plan: "Silver birthday party package",
  //   price: "2000 dhs for 15 kids",
  //   bgColor: "#F2F8ED",
  //   btnColor: "#62bc21",
  //   features: [
  //     "Reserve the hall for 3 hours",
  //     "Tables and chairs",
  //     "Free entry to the indoor playground including (magic painting, dynamic slide, crazy magic ball, dynamic trampoline)",
  //     "Use of Majlis Hall for parents with free coffee",
  //   ],
  // },
  // {
  //   key: "5",
  //   plan: "One Day Access",
  //   price: "70AED/kid",
  //   bgColor: "#FCE3E2",
  //   btnColor: "#27ada6",
  //   features: [
  //     "Enables customers to use the various facilities of the centre, which include indoor playground and using the Majlis (parents setting area) for 3 hours.",
  //   ],
  // },
  // {
  //   key: "6",
  //   plan: "Family Day package",
  //   price: "1500 AED/15 kids",
  //   bgColor: "#EDFDE5",
  //   btnColor: "#3d87ff",
  //   features: [
  //     "3 hours booking for playground during weekdays",
  //     "Popcorn and juice for each kid",
  //     "Access to majles with free coffee",
  //     "Cinema hall (choose one film from available movie collection",
  //     "The package are not available during weekend or public holidays",
  //   ],
  // },
  // {
  //   key: "7",
  //   plan: "School Packages",
  //   price: "50 AED/person",
  //   bgColor: "#FDEBEA",
  //   btnColor: "#ffae00",
  //   features: [
  //     "3 hours’ free access to the playground",
  //     "Access to the movie room",
  //     "Healthy meals",
  //     "Recreational and educational activities",
  //   ],
  // },
  // {
  //   key: "8",
  //   plan: "Meetings /workshops packages",
  //   price: "1500 AED for 30 people",
  //   bgColor: "#F2F8ED",
  //   btnColor: "#62bc21",
  //   features: ["Hall booking", "Stationery, laptop and screen", "Coffee break"],
  // },
  {
    key: "3",
    plan: "School Package",
    price: "60 AED per child",
    bgColor: "#EEF4FF",
    btnColor: "#3d87ff",
    features: [
      "Entry to the playground for 3 Hours",
      
      "Use the cinema hall and choose one cartoon movie from a selection of movies",
      "Recreational and educational activities",
      "Popcorn and juice",
      "Special socks for playing (anti slip socks)",
    ],
  },
];

// ACTIVITIES FAQ
export const ACTIVITIES_FAQS: ActivitiesFAQs[] = [
  {
    key: "1",
    title: "Will I need to bring anything?",
    desc: "Socks: We have shoe-free, sock-only zones. If you forget to bring yours, buy a pair at reception.",
  },
  {
    key: "2",
    title: "Do you have baby facilities?",
    desc: "Baby changing station is provided in the accessible bathroom.",
  },
  {
    key: "3",
    title: "Can I drop my kids off?",
    desc: "All children must be accompanied by an adult (18 years or older). However, we are offering nursing service in Al Margab branch at additional costs.",
  },
  {
    key: "4",
    title: "What age group is Fun Box suitable for?",
    desc: "Fun Box is designed for children from 2 to 12 years old.",
  },
  {
    key: "5",
    title: "Are there any safety measures in Fun Box?",
    desc: "Yes, safety is a priority at Fun Box. We have safety features like soft play surfaces, padded equipment, and trained staff to ensure a safe play environment.",
  },
  {
    key: "6",
    title: "Can I tour the venue before booking?",
    desc: "Sure, you are always welcome to come and see the venue.",
  },
  {
    key: "7",
    title: "Are there different packages available?",
    desc: "Yes, there are three different party packages. Contact us to send you the details.",
  },
];

// NAVIGATION
export const NAV_LINKS: NavLink[] = [
  { href: `/`, key: "home", label: "Home",locale:"en" },
  { href: "about-us", key: "aboutus", label: "About Us",locale:"en"  },
  { href: "activities", key: "activities", label: "Activities" ,locale:"en" },
  { href: "party-packages", key: "party-packages", label: "Party Packages" ,locale:"en" },
  {
    href: "school-packages",
    key: "prices",
    label: "Prices",
    locale:"en" 
  },
  {
    href: "gallery",
    key: "gallery",
    label: "Gallery",
    locale:"en" 
  },
  {
    href: "blogs",
    key: "blogs",
    label: "Blogs",
    locale:"en" 
  },
  {
    href: "contact-us",
    key: "contactus",
    label: "Contact",
    locale:"en" 
  },
];

// FOOTER QUICK LINKS
export const QUICK_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "about-us", key: "aboutus", label: "About Us" },
  { href: "activities", key: "activities", label: "Activities" },
  {
    href: "rate-memberships",
    key: "rate-memberships",
    label: "Rate Memberships",
  },
  {
    href: "contact-us",
    key: "contactus",
    label: "Contact",
  },
];

// SOCIAL LINKS
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.instagram.com/funbox.uae/",
    key: "instagram",
    icon: ImInstagram,
    iconColor: "text-white",
    bgColor: "#ffae00",
  },
  {
    href: "https://www.youtube.com/channel/UC0m96gfzyB2iqgt2dJRUUaA",
    key: "youtube",
    icon: TfiYoutube,
    iconColor: "text-white",
    bgColor: "#ff4880",
  },
];

// CONTACT LINKS
export const CONTACT_LINKS: ContactLink[] = [
  {
    key: "1",
    icon: FaPhoneAlt,
    iconColor: "text-white",
    text: "Maliha branch : (06) 546 9577 Matajir Al Mirgab branch : (06) 521 9165",
  },
  {
    key: "2",
    icon: LuMail,
    iconColor: "text-white",
    text: "info@funboxuae.ae",
  },
  {
    key: "3",
    icon: FaLocationDot,
    iconColor: "text-white",
    text: "Maliha Road Branch | Matajer Al Mirgab branch",
  },
];
