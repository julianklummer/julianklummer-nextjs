import { Skill, TabCategory } from "./types";

export const React: Skill = {
  title: "React",
  icon: "react",
};

export const Typescript: Skill = {
  title: "Typescript",
  icon: "Typescript",
};

export const frameworks: TabCategory = {
  title: "frameworks",
  skillList: [React],
};

export const languages: TabCategory = {
  title: "languages",
  skillList: [Typescript],
};

export const testData: TabCategory[] = [frameworks, languages];
