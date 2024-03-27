interface Props {
  
    locale:string
  
}

const Infobar = ({locale}:Props) => {
  return (
    <div className="flex items-center justify-center font-rubik text-sm md:text-sm  text-white font-normal tracking-[0.2px] bg-[#383E72] py-3 px-4 text-center">
{
  locale =="en" ?" Opening Time: Matajer Al Mirgab Mon-Thu 10am – 10pm, Fri-Sun 10am-11pm Maliha Road Mon-Thu 1pm – 9pm, Fri-Sun 11am-10pm":
  "أوقات العمل:- متاجر المرقاب: من الاثنين إلى الخميس، من الساعة 10 صباحًا حتى الساعة 10 مساءً. من الجمعة إلى الأحد، من الساعة 10 صباحًا حتى الساعة 11 مساءً.\r طريق مالحة: من الاثنين إلى الخميس، من الساعة 1 ظهرًا حتى الساعة 9 مساءً. من الجمعة إلى الأحد، من الساعة 11 صباحًا حتى الساعة 10 مساءً."
  }    
  </div>
  )
}

export default Infobar