import { atom, selector } from 'recoil';

export const placeDataAtom = atom({
  key: 'placeDataAtom',
  default: [],
});

export const filterAtom = atom({
  key: 'filterAtom',
  default: [],
});

export const pageCountAtom = atom({
  key: 'pageCountAtom',
  default: 0,
});

export const clickedPageAtom = atom({
  key: 'clickedPageAtom',
  default: 0,
});
