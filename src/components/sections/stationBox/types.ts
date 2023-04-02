export type station = {
  id: string;
  title: string;
  institution?: string;
  duration?: string;
  location?: string;
  icon?: string;
  link?: string;
  linkTitle?: string;
  infos?: string[];
};

export type stationList = station[];
