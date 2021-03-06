import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {store} from "./store";
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}>
  <AppContainer/>
</Provider>, document.getElementById("YTS"));

registerServiceWorker();
