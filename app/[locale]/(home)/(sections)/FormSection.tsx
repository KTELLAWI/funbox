"use client"
import ContactForm from '@/components/contact-form'
import { Form } from '@/components/ui/form'
import React from 'react'

function FormSection() {
  return (
     <section className='w-full flex-col lg:flex  lg:flex-1 lg:flex-row lg:h-[500px] justify-center items-center space-x-0 p-0 mb-28'>
       <div className='lg:flex w-full lg:w-[90vw] bg-cover items-center bg-repeat bg-hero bg-[#383e72] p-8 h-[500px] '>
       <ContactForm />

       
        </div> 
       <div className='flex flex-1 p-0'></div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.4818823637906!2d55.41872947496119!3d25.38867552391931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59d15d89e3cf%3A0x3da39f44ff766d17!2sMatajer%20Al%20Mirgab!5e0!3m2!1sen!2sin!4v1707734809138!5m2!1sen!2sin" width="100%" height="500" loading="lazy" className='p-0 m-0 w-full'></iframe>

    </section>
  )
}

export default FormSection