import { TabCategory } from "src/components/sections/skillBox/types";

export type indexData = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subline: string;
  };
};

export type skillList = TabCategory[];

export type station = {
  title: string;
  institution: string;
  duration: string;
  location: string;
  icon: string;
  link: string;
  linkTitle: string;
  infos: string[];
};

export type stationList = station[];
