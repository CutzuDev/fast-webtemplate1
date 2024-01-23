import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Card = {
  title: string;
  description: string;
};

export const cardList: Card[] = [
  {
    title: "Achteraf betalen",
    description: "Betaal achteraf, betaal €2000 zodra €5000 is verdiend.",
  },
  {
    title: "Dropshipping",
    description:
      "Unieke toegang tot moderne dropshipping: Laat je begeleiden door experts met de nieuwste strategieën en tactieken.",
  },
  {
    title: "Betaalbaar",
    description:
      "Lage voorafgaande kosten: Ervaar de voordelen van geld verdienen zonder veel vooraf te investeren!",
  },
  {
    title: "Coaching",
    description:
      "Persoonlijke coaching: 24/7 chat contact Whatsapp Met alle 3 de eigenaren.",
  },
  {
    title: "Netwerk",
    description:
      "Toegang tot een exclusief netwerk: Storedesigners, video-editors en mediabuyers gelijk tot je beschikking! Dit zal de key naar snel succes gaan zijn.",
  },
];
