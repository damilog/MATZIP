import { lazy } from 'react';
import paths from './paths';

const componentByPath = {
  home: lazy(() => import('pages/Home')),
  place: lazy(() => import('pages/Place')),
  editor: lazy(() => import('pages/Editor')),
};

const routes = paths.map(({ name, path }) => ({
  name,
  path: path,
  component: componentByPath[name],
}));

export default routes;
