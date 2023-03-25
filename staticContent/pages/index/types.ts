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
