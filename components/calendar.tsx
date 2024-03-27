"use client"

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Button } from '@/components/ui/button';

interface CalendarButtonProps {
  children: React.ReactNode;
  calLink: string;
  calConfig: string;
  calNamespace: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
  className?: string;
}

const Calendar = ({ children, calLink, calConfig, className, calNamespace, variant, size }: CalendarButtonProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#FE4880" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <Button
      variant={variant}
      size={size}
      data-cal-namespace={calNamespace}
      data-cal-link={calLink}
      data-cal-config={calConfig}
      className={className}
    >
      {children}
    </Button>
  );
};

export default Calendar;
