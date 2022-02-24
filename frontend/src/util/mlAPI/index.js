import instance from './instance';

const getRecommend = (placeId) => instance.get(`/${placeId}`);

const API = {
  getRecommend,
};

export default API;
