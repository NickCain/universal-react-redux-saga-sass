import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import {
  setToImmutableStateFunc,
  setToMutableStateFunc,
  immutableReducer as reduxAsyncConnect
} from 'redux-connect';

import routeReducer from './routing';

setToImmutableStateFunc(mutableState => fromJS(mutableState));
setToMutableStateFunc(immutableState => immutableState.toJS());

// Add all reducers from the folder into the combine reducers below
export default function createReducer() {
  return combineReducers({
    reduxAsyncConnect,
    routing: routeReducer
  });
}
