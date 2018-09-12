import React, {Component} from 'react';
import './Panel.css';
import {connect} from "react-redux";
import {
  videosFetched,
  videosTitle,
  videosDate,
  videosFavorites,
  queryInput,
  sortInput,
  maxResultsInput,
  galleryModeChange,
  findTitleInput,
  showResultsChange,
} from "../actions";

const APIKEY = "AIzaSyA-VhAmX6JwOcb78Llm7-zzH0NQVz17zz4";

class Panel extends Component {
  constructor(props) {
    super(props)
    this.request = this.request.bind(this);
    this.showFavs = this.showFavs.bind(this);
    this.findVideo = this.findVideo.bind(this);
    this.handleSortingChange = this.handleSortingChange.bind(this);
    this.handleMaxResultsChange = this.handleMaxResultsChange.bind(this);
  }

  async request() {
    this.props.galleryModeChange("videos");
    const URL = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&part=snippet,id&maxResults=${this.props.maxResults}&q=${this.props.query}&type=video`
    await fetch(URL).then(res => res.json()).then(json => this.props.videosFetched(json.items));
    this.startSorting();
  }

  showFavs() {
    this.props.galleryModeChange("favorites");
  }

  async handleMaxResultsChange(event) {
    await this.props.maxResultsInput(event.target.value);
    if (this.props.query !== "") {
      this.request();
    }
  }

  startSorting() {
    if (this.props.videos.length !== 0) {
      switch (this.props.sort) {
        case "title":
          this.props.videosTitle(this.props.videos)
          break;
        case "publ":
          this.props.videosDate(this.props.videos);
          break;
        case "fav":
          this.props.videosFavorites(this.props.videos, this.props.favorites);
          break;
        default:
          this.request();
      }
    }
  }

  async handleSortingChange(event) {
    await this.props.sortInput(event.target.value);
    this.startSorting();
  }

  findVideo() {}

  render() {
    return (<div className="panel-top">
      <input onChange={(event) => {
          this.props.queryInput(event.target.value);
        }} placeholder="Search..." className="search" type="text"></input>
      <button onClick={this.request}>Search</button>
      <div className="separator"></div>
      <span className="desc">Sort by:
      </span>
      <select value={this.props.sort} placeholder="choose" onChange={this.handleSortingChange}>
        <option value="title">Title</option>
        <option value="publ">Published</option>
        <option value="fav">Favorites</option>
      </select>
      <span className="desc">Max results:
      </span>
      <select value={this.props.maxResults} onChange={this.handleMaxResultsChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <div className="separator"></div>
      <button onClick={this.showFavs}>Favorites</button>
      <div className="separator"></div>
      <input onChange={(event) => {
          this.props.findTitleInput(event.target.value);
        }} placeholder="Find Video by Title..." className="search" type="text"></input>
      <button onClick={() => {
          this.props.showResultsChange(true);
        }}>Find</button>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
    sort: state.sort,
    maxResults: state.maxResults,
    videos: state.videos,
    favorites: state.favorites,
  }
};
const mapDispatchToProps = {
  videosFetched,
  videosTitle,
  videosDate,
  videosFavorites,
  queryInput,
  sortInput,
  maxResultsInput,
  galleryModeChange,
  findTitleInput,
  showResultsChange
};

export const AppPanel = connect(mapStateToProps, mapDispatchToProps)(Panel);
