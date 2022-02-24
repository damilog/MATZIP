import instance from './instance';

const getCategory = () => instance.get('/category');
const getPlace = (pageNumber) => instance.get(`/matzip/${pageNumber}`);
const getPlaceByCategory = (categoryId, pageNumber) =>
  instance.get(`/matzip/category/${categoryId}/${pageNumber}`);
const getPlaceDetail = (placeId) => instance.get(`/matzip/${placeId}`);

const postPlace = (newPlace) => instance.post('/matzip', newPlace);
const postReview = (placeId, review) => instance.post(`/${placeId}/reviews`, review);

const putPlace = (placeId, placeData) => instance.put(`/matzip/${placeId}`, placeData);
const putReview = (placeId, reviewId, review) =>
  instance.put(`/${placeId}/reviews/${reviewId}`, review);

const deletePlace = (placeId) => instance.delete(`/${placeId}`);
const deleteReview = (placeId, reviewId) => instance.delete(`/${placeId}/reviews/${reviewId}`);

const homeAPI = {
  getCategory,
  getPlace,
  getPlaceByCategory,
  getPlaceDetail,

  postPlace,
  postReview,

  putPlace,
  putReview,

  deletePlace,
  deleteReview,
};

export default homeAPI;
