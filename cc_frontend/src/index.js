import 'bootswatch/dist/cyborg/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import peopleReducer from './reducers/peopleReducer'

import App from './App';
//import reportWebVitals from './reportWebVitals';

const enhancement = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(peopleReducer, enhancement(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);