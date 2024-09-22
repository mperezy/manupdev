enum routeEnum {
  home = 'home',
  portfolio = 'portfolio',
  about = 'about-me',
}

type RouteEnum = keyof typeof routeEnum;

type AllPaths<T> = T extends `${routeEnum.home}` ? '/' : `/${T}`; // '/' | '/portfolio' | '/links';

type Path = AllPaths<RouteEnum>;

type RouteI<Rest> = {
  path: Path;
  name: string;
} & Rest;

type Routes<T, Rest> = Record<T, RouteI<Rest>>;
