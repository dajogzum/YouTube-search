export const videosFetched = (videos, favorites) => ({
  type: 'FETCHED_VIDS',
  videos,
  favorites
});

export const videosTitle = (videos) => ({
  type: 'TITLE',
  videos
});

export const videosDate = (videos) => ({
  type: 'DATE',
  videos
});

export const videosFavorites = (videos, favorites) => ({
  type: 'FAVORITES',
  videos,
  favorites
});

export const queryInput = (string) => ({
  type: 'SEARCH_QUERY_INPUT',
  string
});

export const sortInput = (sort) => ({
  type: 'SORT_INPUT',
  sort
});

export const maxResultsInput = (maxResults) => ({
  type: 'MAXRESULTS_INPUT',
  maxResults
});

export const findTitleInput = (title) => ({
  type: 'FIND_TITLE_INPUT',
  title
});

export const showResultsChange = (show) => ({
  type: 'SHOW_RESULTS',
  show
});

export const addFavorite = (fav) => ({
  type: 'ADD_FAVORITES',
  fav
});

export const removeFavorite = (fav) => ({
  type: 'REMOVE_FAVORITES',
  fav
});

export const galleryModeChange = (mode) => ({
  type: 'GALLERY_MODE',
  mode
});