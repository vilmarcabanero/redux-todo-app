import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from 'redux/store';

const store = createStore(combinedReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
