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
    title: "Snel resultaat",
    description:
      "De strategie die we hanteren gaat ervoor zorgen, dat we snel en efficiënt ons gezamenlijke doel van €5.000 winst kunnen behalen.",
  },
  {
    title: "Transparant",
    description:
      "We leggen je precies, en eerlijk uit hoe je snel en makkelijk winst kunt gaan maken met dropshipping. En geen geld hoeft te verspillen.",
  },
  {
    title: "Persoonlijke aanpak",
    description:
      "Persoonlijke coaching via Whatsapp. Op deze manier kunnen wij jou maximaal motiveren om alles te geven en in korte tijd succesvol te worden.",
  },
  {
    title: "24 uur Ready2Go",
    description:
      "Storedesigner en videoeditor worden per direct aangeleverd. Waardoor wij alleen maar het beste winnende product hoeven te selecteren en je geld kan gaan verdienen.",
  },
];
