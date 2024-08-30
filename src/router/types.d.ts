type Path = '/' | '/portfolio' | '/links';

type RouteI = {
  path: Path;
  name: string;
};

type Routes<T> = Record<T, RouteI>;
