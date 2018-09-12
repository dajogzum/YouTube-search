import {
  combineReducers
} from "redux";
import {
  videos,
  favorites,
  galleryMode,
} from "./videos";
import {
  query,
  maxResults,
  sort,
  findTitle,
  showResults
} from "./query";

export default combineReducers({
  videos,
  query,
  maxResults,
  sort,
  favorites,
  galleryMode,
  findTitle,
  showResults
});