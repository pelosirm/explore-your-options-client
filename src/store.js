import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {exploreReducer} from './reducers';
import { reducer as formReducer } from 'redux-form';

export default createStore(combineReducers({ form : formReducer, exploreReducer}), applyMiddleware(thunk));