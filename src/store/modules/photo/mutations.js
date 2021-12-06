export default {
  SET_PHOTOS: (state, photoList) => (state.photoList = photoList),
  ADD_NEW_PHOTOS: (state, morePhotoList) => state.photoList.push(...morePhotoList),
  SET_SEARCH_QUERY_PHOTOS: (state, query) => (state.searchQueryPhoto = query),
  SET_ERROR_RESPONSE_PHOTOS: (state, error) => (state.errorPhotos = error)
};
