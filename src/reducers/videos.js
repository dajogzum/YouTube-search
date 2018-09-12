const removeFav = (state = [], id) => {
  const favvids = state.filter(video => video.id !== id);
  return favvids;
}

export const videos = (state = [], action) => {
  let videos = [];
  switch (action.type) {
    case 'FETCHED_VIDS':
      for (const prop of action.videos) {
        videos.push({
          id: prop.id.videoId,
          date: prop.snippet.publishedAt,
          title: prop.snippet.title,
          thumbnail: prop.snippet.thumbnails.medium.url,
          channel: prop.snippet.channelTitle,
        })
      }
      return videos
    case 'TITLE':
      videos = [...action.videos]
      videos.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      return videos
    case 'DATE':
      videos = [...action.videos]
      videos.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return videos
    case 'FAVORITES':
      let favs = [];
      let nonfavs = [...action.videos]
      for (const element of action.favorites) {
        let favoriteVid = action.videos.filter(video => video.id === element.id)[0];
        if (favoriteVid !== undefined) {
          favs.push(favoriteVid);
        }
        nonfavs = nonfavs.filter(video => video.id !== element.id);
      }
      return favs.concat(nonfavs);
    default:
      return state
  }
}

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      return [...state, action.fav]
    case 'REMOVE_FAVORITES':
      return removeFav(state, action.fav.id)
    default:
      return state
  }
}

export const galleryMode = (state = "videos", action) => {
  switch (action.type) {
    case 'GALLERY_MODE':
      return action.mode
    default:
      return state
  }
}