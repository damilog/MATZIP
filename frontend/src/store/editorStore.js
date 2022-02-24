import { atom, selector } from 'recoil';

export const newPlaceData = atom({
  key: 'newPlaceData',
  default: {
    category: '',
    username: '',
    title: '',
    content: '',
    thumbnail: '',
    naverUrl: '',
    naverRating: 0,
    naverComment: '',
    address: '',
    price: 0,
  },
});

export const isEmptyInput = atom({
  key: 'isEmptyInput',
  default: false,
});
