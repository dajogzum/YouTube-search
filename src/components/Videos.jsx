import React, {Component} from 'react';
import './Videos.css';
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../actions";

class Videos extends Component {
  constructor(props) {
    super(props)
    this.published = this.published.bind(this);
    this.redirect = this.redirect.bind(this);
    this.favs = this.favs.bind(this);
  }

  published(time) {
    const published = new Date(time);
    return published.toLocaleString();
  }

  redirect(id) {
    const URL = `https://www.youtube.com/watch?v=${id}`;
    window.open(URL, "_blank");
  }

  favs(video, fav) {
    fav
      ? this.props.removeFavorite(video)
      : this.props.addFavorite(video);
  }

  render() {
    let fav;
    const video = this.props.content;
    this.props.favorites.find((element) => {
      return element.id === video.id
    }) !== undefined
      ? fav = true
      : fav = false;
    console.log(video.id);
    return (<div key={video.id} className={fav
        ? "container favs"
        : "container"}>
      <h3>{video.title}</h3>
      <h5>{video.channel}</h5>
      <img src={video.thumbnail} alt={video.title}></img>
      <div className="navigation">
        <button onClick={() => {
            this.favs(video, fav)
          }}>{
            fav
              ? "- Fav"
              : "+ Fav"
          }</button>
        <button onClick={() => {
            this.redirect(video.id)
          }}>PLAY</button>
        <span className="time">published: {this.published(video.date)}</span>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {favorites: state.favorites}
};
const mapDispatchToProps = {
  addFavorite,
  removeFavorite
};

export const AppVideos = connect(mapStateToProps, mapDispatchToProps)(Videos);
