import { atom, selector } from 'recoil';

export const placeDetailDataAtom = atom({
  key: 'placeDetailDataAtom',
  default: [],
});

export const placeIdAtom = atom({
  key: 'placeIdAtom',
  default: 0,
});

export const recommendDataAtom = atom({
  key: 'recommendDataAtom',
  default: [],
});