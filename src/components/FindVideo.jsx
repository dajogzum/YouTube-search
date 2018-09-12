import React, {Component} from 'react';
import './FindVideo.css';
import {AppVideos} from './Videos'
import {connect} from "react-redux";
import {showResultsChange} from "../actions";

class FindVideo extends Component {
  constructor(props) {
    super(props)
    this.renderVideos = this.renderVideos.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('scrolllock')
  }

  published(time) {
    const published = new Date(time);
    return published.toLocaleString();
  }

  renderVideos() {
    let found = [];
    const exp = new RegExp(this.props.findTitle, "gi");
    for (const prop of this.props[this.props.galleryMode]) {
      if (prop.title.match(exp) !== null) {
        found.push(prop);
      }
    }
    if (found.length !== 0) {
      let vids = found.map((video) => {
        return (<AppVideos key={video.id} content={video}/>)
      });
      return (vids)
    } else {
      return <div className="head">No Match</div>
    }
  }

  render() {
    return (<div className="blackout">
      <div className="FindVideo">
        <div className="head">
          <div className="close" onClick={() => {
              document.body.classList.remove('scrolllock');
              this.props.showResultsChange(false);
            }}>X</div>
          <h3>RESULTS</h3>
        </div>
        <div className="results">{this.renderVideos()}</div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {videos: state.videos, favorites: state.favorites, galleryMode: state.galleryMode, findTitle: state.findTitle,}
};
const mapDispatchToProps = {
  showResultsChange
};

export const AppFindVideo = connect(mapStateToProps, mapDispatchToProps)(FindVideo);
