import { createStore, combineReducers } from 'redux';
import userReducer from './reducers';
import { updateReducer } from './reducers';

const rootReducer = combineReducers({
  getUserData:userReducer,
  updatedUserData:updateReducer
});

const store = createStore(rootReducer);

export default store;