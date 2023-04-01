export type Skill = {
  title: string;
  icon: string;
  iconColorRGB?: { r: string; g: string; b: string };
};

export type TabCategory = {
  title: string;
  id: string;
  skillList: Skill[];
};

export type skillList = TabCategory[];
