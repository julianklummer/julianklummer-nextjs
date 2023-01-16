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
    to: "/blog",
    title: "Blog",
  },
];
