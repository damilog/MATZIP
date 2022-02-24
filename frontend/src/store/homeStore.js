import { atom, selector } from 'recoil';

export const placeDataAtom = atom({
  key: 'placeDataAtom',
  default: [],
});

export const filterAtom = atom({
  key: 'filterAtom',
  default: [],
});

export const clickedPlaceIdAtom = atom({
  key: 'clickedPlaceIdAtom',
  default: 0,
});
