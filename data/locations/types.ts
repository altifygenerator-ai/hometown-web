import type { Metadata } from "next";

export type LocationFAQ = {
  question: string;
  answer: string;
};

export type LocationService = {
  title: string;
  text: string;
};

export type LocationLayout = {
  pageStyle?: "local" | "tourism" | "metro";
  heroVariant?: "simple" | "split" | "visual";
  introVariant?: "split" | "editorial";
  servicesVariant?: "cards" | "list";
  seoVariant?: "panel" | "split";
};

export type LocationHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image?: string;
  video?: string;
};

export type LocationIntroData = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export type LocationData = {
  city: string;
  state: string;
  slug: string;
  url: string;

  layout?: LocationLayout;

  metadata: Metadata;

  hero: LocationHeroData;

  trustItems: string[];

  intro: LocationIntroData;

  services: LocationService[];

  seoBlock: {
    eyebrow: string;
    title: string;
    text: string;
    nearbyAreas: string[];
  };

  industries: string[];

  faqs: LocationFAQ[];

  schema: object[];
};