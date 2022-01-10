import {applyMiddleware, createStore } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import rootReducers from '../reducers/index';

const store = createStore(rootReducers,applyMiddleware(thunkMiddleware))

export default store