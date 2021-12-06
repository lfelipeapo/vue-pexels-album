export default {
  SET_VIDEOS: (state, videoList) => (state.videoList = videoList),
  ADD_NEW_VIDEOS: (state, moreVideoList) => state.videoList.push(...moreVideoList),
  SET_SEARCH_QUERY_VIDEOS: (state, query) => (state.searchQueryVideo = query),
  SET_ERROR_RESPONSE_VIDEOS: (state, error) => (state.errorVideos = error)
};
