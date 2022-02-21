import { lazy } from 'react';
import paths from './paths';

interface IComponentByPath {
  [K: string]: React.LazyExoticComponent<() => JSX.Element>;
}

const componentByPath: IComponentByPath = {
  home: lazy(() => import('pages/Home')),
};

const routes = paths.map(({ name, path }) => ({
  name,
  path: path,
  component: componentByPath[name],
}));

export default routes;