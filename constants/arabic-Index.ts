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
  locale: string;
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
    heading: "ملعب داخلي",
    desc: "منطقة ملعب داخلية تتضمن ألعابًا مختلفة",
  },
  {
    key: "2",
    src: "/about_indoor_2.jpeg",
    heading: "قاعة الحفلات",
    desc: "قاعة حفلات كاملة الخدمة بما في ذلك غرفة السينما ومنطقة جلوس للآباء (المجلس)",
  },
];

// PARTY BENEFITS
export const PARTY_BENEFITS: PartyBenefits[] = [
  {
    key: "1",
    src: "/party_icon1.png",
    desc: "مساحة حدث حديثة جديدة يمكنها استيعاب ما يصل إلى 50 شخصًا.",
  },
  {
    key: "2",
    src: "/party_icon2.png",
    desc: "إعدادات مرنة للغرف",
  },
  {
    key: "3",
    src: "/party_icon3.png",
    desc: "مسرح",
  },
  {
    key: "4",
    src: "/party_icon4.png",
    desc: "غرفة السينما",
  },
  {
    key: "5",
    src: "/party_icon5.png",
    desc: "المجلس",
  },
  {
    key: "6",
    src: "/party_icon6.png",
    desc: "قائمة للأطفال",
  },
];

// CONTACT DETAILS
export const CONTACT_DETAILS: ContactDetails[] = [
  {
    key: "1",
    icon: FaPhoneAlt,
    iconColor: "text-white",
    bgColor: "#ffae00",
    desc: "فرع مليحة: (06) 546 9577\nفرع متاجر المرجب: (06) 521 9165",
  },
  {
    key: "2",
    icon: LuMail,
    iconColor: "text-white",
    bgColor: "#ff4880",
    desc: "info@funboxuae.ae",
  },
  {
    key: "3",
    icon: FaLocationDot,
    iconColor: "text-white",
    bgColor: "#5798fe",
    desc: "فرع طريق مليحة | فرع متاجر المرقاب",
  },
];

// PARTY PACKAGES
export const PARTY_PACKAGES: PartyPackages[] = [
  {
    key: "1",
    plan: "حزم الحفلات",
    price: "1000 درهم لـ 12 طفل",
    bgColor: "#FDEBEA",
    btnColor: "#ffae00",
    features: [
      "الدخول إلى الملعب الداخلي بما في ذلك مختبر السحر والشريحة الديناميكية والترامبولين ولعبة الأرنب المغامر والرسم السحري وما إلى ذلك.",
      "تزيين موقف بالبالونات",
      "الطاولات والكراسي",
      "ألعاب وأنشطة ترفيهية للأطفال",
    ],
  },
  {
    key: "2",
    plan: "حزم المدارس",
    price: "50 درهم للطفل لمدة 2 ساعة",
    bgColor: "#F2F8ED",
    btnColor: "#3d87ff",
    features: [
      "رسم السحر",
      "منطقة الكرة السحرية",
      "ألعاب تفاعلية",
      "ألعاب لينة",
      "لعبة الأرنب المغامر",
      "مختبر السحر",
    ],
  },
];

export const MATAJER_PACKAGES: MatajerPackages[] = [
    {
      key: "1",
      plan: "وصول لمدة ساعة واحدة",
      price: "52.5 درهم إماراتي لكل طفل (شامل الضريبة)",
      bgColor: "#F2F8ED",
      btnColor: "#62bc21",
      features: [],
    },
    {
      key: "2",
      plan: "الساعة الثانية",
      price: "21 درهم إماراتي لكل طفل (شامل الضريبة)",
      bgColor: "#EEF4FF",
      btnColor: "#3d87ff",
      features: [],
    },
    {
      key: "3",
      plan: "الساعة الثالثة",
      price: "10.5 درهم إماراتي لكل طفل (شامل الضريبة)",
      bgColor: "#EEF4FF",
      btnColor: "#ffae00",
      features: [],
    },
  ];
  
  // حزم ماليحا
  export const MALIHA_PACKAGES: MalihaPackages[] = [
    {
      key: "1",
      plan: "وصول ليوم واحد",
      price: "70 درهم إماراتي لكل طفل",
      bgColor: "#FDEBEA",
      btnColor: "#3d87ff",
      features: [
        "تمكين الأطفال من استخدام جميع مرافقنا، والتي تشمل ملعب داخلي واستخدام المجلس (منطقة جلوس الآباء) لمدة 3 ساعات.",
        
      ],
    },
    {
      key: "2",
      plan: "حزمة ممتعة",
      price: "90 درهم إماراتي لكل طفل",
      bgColor: "#EEF4FF",
      btnColor: "#3d87ff",
      features: [
        "تمكين الأطفال من استخدام جميع الفعاليات لدينا، والتي تشمل الملعب الداخلي واستخدام المجلس (منطقة جلوس الآباء) لمدة 3 ساعات واختيار واحدة من ورش العمل الممتعة لدينا.",
      ],
    },
    {
      key: "3",
      plan: "حزمة المدرسة",
      price: "60 درهم إماراتي لكل طفل",
      bgColor: "#EEF4FF",
      btnColor: "#3d87ff",
      features: [
        "الدخول إلى الملعب لمدة 2 ساعة",
        "التكلفة الإضافية لكل ساعة إضافية تتجاوز الساعتين الأولى هي 10 دراهم",
        "استخدام قاعة السينما واختيار فيلم كرتون واحد من مجموعة متنوعة من الأفلام",
        "أنشطة ترفيهية وتعليمية",
        "بوب كورن وعصير",
        "جوارب خاصة للعب (جوارب مضادة للانزلاق)",
      ],
    },
  ];
  
  // بطاقات الأنشطة
  export const ACTIVITIES_CARDS: ActivitiesCard[] = [
    {
      key: "1",
      src: "/activites_Img1.jpeg",
      heading: "الأرض الديناميكية",
      desc: "هذه معرض تفاعلي على الأرض، تفاعل حقيقي بين الطفل والإسقاط على الأرض. نستخدم تقنية الكمبيوتر المتقدمة وتقنية الإسقاط لإنشاء تجربة تفاعلية سحرية. يمكن لهذا النظام إنتاج مجموعة متنوعة من التأثيرات الخاصة، ويمكن للشخص الذي يختبرها المشاركة في التفاعل بفرح. مناسب للأطفال من سن 3 إلى 12 عامًا",
    },
    {
      key: "2",
      src: "/activites_Img2.jpeg",
      heading: "رسم سحري",
      desc: "يمكن للأطفال اختيار الحيوانات التي يحبونها مثل الأسماك وحيوانات الغابة والمزرعة، والرسم بألوان قلم مختلفة أو حل الألغاز حولها. بعد ذلك، ستظهر الحيوانات الفريدة بشكل سحري على الشاشة الذكية. اضغط بلطف عليها، وستهرب الحيوانات! يجمع هذا اللعبة بين فصل الرسم التقليدي والتكنولوجيا المبتكرة. يمكن للأطفال أن يحرروا خيالهم من خلال إنشاء حيواناتهم الخاصة.",
    },
    {
      key: "3",
      src: "/activites_Img3.jpeg",
      heading: "كرة السحر المجنونة",
      desc: "يختار الأطفال الكرة ويرمونها على الشاشة الكبيرة ويضربون الأهداف بحيث يحصلون على نقاط كافية. إنها مثيرة للغاية ومليئة بالتحديات. تناسب كرة السحر المجنونة الأطفال من سن 3 إلى 12 عامًا",
    },
    {
      key: "4",
      src: "/activites_Img4.jpeg",
      heading: "الحصيرة الديناميكية",
      desc: "لعبة الحصيرة الهوائية هي لعبة تقليدية ومعروفة جيدًا تحبها الأطفال بشدة. يمكن أن تعزز اللعبة نمو وتطور العضلات والعظام للأطفال، وتساعد في تحسين التنسيق الجسدي. الحصيرة الديناميكية هي سلسلة من الألعاب مصممة خصيصًا للأطفال الذين تتراوح أعمارهم بين 3 و 12 عامًا، حيث تجمع المنتج تقنية الضوء والظل مع طريقة لعب الحصيرة التقليدية",
    },
    {
      key: "5",
      src: "/activites_Img5.jpeg",
      heading: "الزحف الديناميكي",
      desc: "الزحف هي لعبة مثيرة ومحفزة. تحبها جميع الأطفال. الزحف ليس فقط يمكن أن يمارس شخصية الشجاعة والثبات لدى الطفل، ولكن يمكن أيضًا أن يعزز شعوره بالمسافة والمسافة. الزحف الديناميكي هو سلسلة من الألعاب مصممة خصيصًا للأطفال الذين تتراوح أعمارهم بين 3 و 12 عامًا وفقًا لهواياتهم",
    },
    {
      key: "6",
      src: "/activites_Img6.jpeg",
      heading: "المعمل السحري",
      desc: "المعمل السحري هو لعبة تفاعلية متعددة اللمس ترقم الألعاب التقليدية على الجدران وتدعم الأطفال أثناء إنشاء هياكل رسومية من خلال الجرافيتي المرسومة باليد مما يعزز إبداعهم.",
    },
    {
        key: "7",
        src: "/activites_Img7.jpeg",
        heading: "أرنب المغامرة",
        desc: "تعتمد أرنب المغامرة على بلاط الأرض التفاعلي لإنشاء صور كرتونية لطيفة من خلال التكنولوجيا الرقمية للتفاعل عبر القفز، مما يُسلّي ويُبني قدرات التنسيق الجسدي لديهم.",
        }
        
        
        
        
        
        
]

export const BLOG_CARDS: BlogCard[] = [
    {
      key: "1",
      src: "/activites_Img1.jpeg",
      heading: "فان بوكس الإمارات: ثورة في لعب الأطفال من خلال الألعاب التفاعلية",
      desc: "هذا هو معرض الإسقاط التفاعلي على الأرض، تفاعل حقيقي بين الطفل والإسقاط على الأرض. نحن نستخدم تكنولوجيا الحاسوب المتقدمة وتكنولوجيا الإسقاط لإنشاء تجربة تفاعلية سحرية. يمكن لهذا النظام إنتاج مجموعة متنوعة من التأثيرات الخاصة، ويمكن للمشارك الاستمتاع بالتفاعل بفرح. مناسب للأطفال من عمر 3 إلى 12 عامًا",
    },
  ];
  export const RATE_CARDS: RateCards[] = [
    {
      key: "1",
      plan: "حزمة حفلة عيد ميلاد VIP",
      price: "2800 درهم إماراتي لـ 15 طفلاً",
      bgColor: "#FDEBEA",
      btnColor: "#ffae00",
      features: [
        "حجز القاعة لمدة 3 ساعات بموضوع الحفلة",
        "تزيين القاعة والمدخل بالبالونات (حوالي 200 بالون)",
        "طاولات وكراسي مع تزيين وفقًا للموضوع",
        "أطباق، أكواب، قبعات ولوازم حفلة أخرى",
        "تزيين طاولة الكعك",
        "فشار",
        "وجبات الأطفال (يتم اختيارها من القائمة المتاحة)",
        "ألعاب وأنشطة للأطفال",
        "عرض أفلام في قاعة السينما (اختيار فيلم واحد من مجموعة الأفلام المتاحة)",
        "دخول مجاني إلى الملعب الداخلي بما في ذلك (الرسم السحري، الانزلاق الديناميكي، الكرة السحرية المجنونة، السرير المطاطي الديناميكي والألعاب التفاعلية الأخرى)",
        "استخدام قاعة المجلس للآباء مع قهوة مجانية",
        "ما يميزنا هو نموذج ثلاثي الأبعاد لاسم صاحب الحفلة مع الإضاءة",
      ],
    },
  ];
  export const ACTIVITIES_FAQS: ActivitiesFAQs[] = [
    {
      key: "1",
      title: "هل سأحتاج إلى إحضار أي شيء؟",
      desc: "الجوارب: لدينا مناطق خالية من الأحذية، للجوارب فقط. إذا نسيت جواربك، اشترِ زوجًا منها من الاستقبال.",
    },
    {
      key: "2",
      title: "هل لديكم مرافق للأطفال الرضع؟",
      desc: "تتوفر محطة تغيير الحفاضات في الحمام المتاح.",
    },
    {
      key: "3",
      title: "هل يمكنني ترك أطفالي؟",
      desc: "يجب أن يرافق جميع الأطفال بالغ (18 عامًا أو أكبر). ومع ذلك، نحن نقدم خدمة التمريض في فرع المرقاب مقابل تكاليف إضافية.",
    },
    {
      key: "4",
      title: "لأي فئة عمرية تناسب فان بوكس؟",
      desc: "فان بوكس مصممة للأطفال من سن 2 إلى 12 عامًا.",
    },
    {
      key: "5",
      title: "هل هناك أي تدابير أمان في فان بوكس؟",
      desc: "نعم، السلامة هي أولوية في فان بوكس. لدينا ميزات السلامة مثل الأسطح الناعمة للعب، والمعدات المبطنة، والموظفين المدربين لضمان بيئة لعب آمنة.",
    },
    {
      key: "6",
      title: "هل يمكنني جولة في الموقع قبل الحجز؟",
      desc: "بالتأكيد، أنت دائمًا مرحب به لتأتي وترى الموقع.",
    },
    {
      key: "7",
      title: "هل هناك باقات مختلفة متاحة؟",
      desc: "نعم، هناك ثلاث باقات حفلة مختلفة. اتصل بنا لإرسال التفاصيل لك.",
    },
  ];
    
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
  export const CONTACT_LINKSAr: ContactLink[] = [
    {
      key: "1",
      icon: FaPhoneAlt,
      iconColor: "text-white",
      text: "فرع مليحة: (06) 546 9577\nفرع متاجر المرقاب: (06) 521 9165",
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
      text: "فرع طريق مليحة - فرع متاجر المرقاب",
    },
  ];
  

