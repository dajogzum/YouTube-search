import React, {Component} from 'react';
import './Gallery.css';
import {AppVideos} from './Videos'
import {connect} from "react-redux";
import {addFavorite, removeFavorite,} from "../actions";

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.getVideos = this.getVideos.bind(this);
  }
  componentDidMount() {}

  getVideos(mode) {
    let vids = this.props[mode].map((video) => {
      return (<AppVideos key={video.id} content={video}/>)
    });
    return (vids)
  }

  render() {
    return (<div className="Gallery">
      <div className={this.props[this.props.galleryMode].length === 0
          ? "nothing"
          : "nothing hidden"}>Nothing found</div>
      {this.getVideos(this.props.galleryMode)}
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {videos: state.videos, favorites: state.favorites, galleryMode: state.galleryMode,}
};
const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
};

export const AppGallery = connect(mapStateToProps, mapDispatchToProps)(Gallery);
