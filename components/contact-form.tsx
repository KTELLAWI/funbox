"use client";

import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import toast from "react-hot-toast";

import { Textarea } from "./ui/textarea";
import LoadingButton from "./loading-button";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validation/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import client from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { useLocale, useTranslations } from "next-intl";

const ContactForm = () => {
  const [submitInProgress, setSubmitInProgress] = useState(false);
  const t = useTranslations();
  const locale= useLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      title:"",
      email:"",
      phone:"",
      message:"",

    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    form.reset();
    form.resetField("message");
    try {
      setSubmitInProgress(true);
      const response =await client.request(
        createItem('contacts', {
          name:values.title,
          email:values.email,
          phone_number:values.phone,
          message:values.message
         
        })
      );
      // await axios.post(
      //   `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contacts?populate=*`,
      //   { data: values },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      //     },
      //   }
      // );

      console.log(response.data);
      toast.success("Form submitted successfully");
      
    } finally {
      // form.reset();
      setSubmitInProgress(false);
    }
  };

  return (
    <div className="w-[100%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 ">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-3 px-3 text-base  rounded-xl"
                    placeholder={locale === "en" ? "Full Name" : "الاسم الكامل"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-3 px-3 text-base rounded-xl"
                    placeholder={locale === "en" ? "Email Address" : "البريد الالكتروني"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-3 px-3 text-base rounded-xl"
                    placeholder={locale === "en" ? "Phone Number" : "رقم التواصل"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="py-3 px-3 text-base rounded-xl"
                    placeholder={locale === "en" ? "Messgae" : "الرسالة"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton
            className="w-full md:w-52 h-5  p-0 flex items-center justify-center bg-[#ffae00] text-white rounded-full text-xl font-medium !mt-5 hover:bg-[#f7b11a] transition-all"
            loading={isLoading}
            disabled={submitInProgress}
            type="submit"
          >
            {locale === "en" ? "Send" :"أرسل"}
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
