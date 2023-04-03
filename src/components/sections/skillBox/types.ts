export type Skill = {
  title: string;
  icon: string;
};

export type TabCategory = {
  title: string;
  id: string;
  skillList: Skill[];
};

export type skillList = TabCategory[];
