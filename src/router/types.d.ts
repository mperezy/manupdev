type RouteI = {
  path: string;
  name: string;
};

type Routes<T> = Record<T, RouteI>;
