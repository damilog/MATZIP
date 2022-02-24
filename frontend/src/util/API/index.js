import instance from './instance';

const getCategory = () => instance.get('/category');
const getPlace = () => instance.get();
const getPlaceWithPage = (pageNumber) => instance.get(`?page=${pageNumber}`);
const getPlaceByCategory = (categoryId, pageNumber = 0) =>
  instance.get(`/category/${categoryId}?page=${pageNumber}`);
const getPlaceDetail = (placeId) => instance.get(`/${placeId}`);

const postPlace = (newPlace) => instance.post('', newPlace);
const postReview = (placeId, review) => instance.post(`/${placeId}/reviews`, review);

const putPlace = (placeId, placeData) => instance.put(`/matzip/${placeId}`, placeData);
const putReview = (placeId, reviewId, review) =>
  instance.put(`/${placeId}/reviews/${reviewId}`, review);

const deletePlace = (placeId) => instance.delete(`/${placeId}`);
const deleteReview = (placeId, reviewId) => instance.delete(`/${placeId}/reviews/${reviewId}`);

const API = {
  getCategory,
  getPlace,
  getPlaceWithPage,
  getPlaceByCategory,
  getPlaceDetail,

  postPlace,
  postReview,

  putPlace,
  putReview,

  deletePlace,
  deleteReview,
};

export default API;
