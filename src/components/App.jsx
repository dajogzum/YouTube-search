import React, {Component} from 'react';
import './App.css';
import {AppPanel} from './Panel';
import {AppGallery} from './Gallery';
import {AppFindVideo} from './FindVideo';
import {connect} from "react-redux";

class App extends Component {
  componentDidMount() {}

  render() {
    return (<div className="App">
      <AppPanel/>
      <div className="content">
        {
          this.props.showResults
            ? <AppFindVideo/>
            : null
        }
        <AppGallery/>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {showResults: state.showResults}
};
const mapDispatchToProps = {};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
