type Messages = typeof import("./src/messages/en.json");
declare interface IntlMessages extends Messages {}

declare module "@calcom/embed-react";
