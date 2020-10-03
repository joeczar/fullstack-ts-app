import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux'
import thunk from 'redux-thunk';
import { Home } from './components/home';


const store = createStore(rootReducer, applyMiddleware(thunk))

let elem;
let isLoggedIn = location.pathname !== "/welcome";
// let isLoggedIn = true;
if (isLoggedIn) {

  elem = (
    <Provider store={ store }>
      <App />
    </Provider>
  );
} else {
  elem = <Home />; //; <Welcome />
}

ReactDOM.render(
  elem,
  document.getElementById('root'));
