type Route = {
  to: string;
  title: string;
};

type RouteList = Route[];

export const routeList: RouteList = [
  {
    to: "/",
    title: "Start",
  },
  {
    to: "/cv",
    title: "CV",
  },
];
