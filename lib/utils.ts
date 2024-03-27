import { type ClassValue, clsx } from "clsx";
import { getLocale } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Define a function to dynamically import based on locale
export const importConstants = async (locale:string) => {
  if (locale === 'ar') {
    return import('../constants/arabic-Index');
  } else {
    return import('../constants/index');
  }
};

// Dynamically import constants based on locale


// You can now use ACTIVITIES_CARDS and ACTIVITIES_FAQS in your code

