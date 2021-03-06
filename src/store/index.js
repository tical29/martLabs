import { createStore, combineReducers } from 'redux';
import reducers from './../reducers';

export const store = createStore(
    combineReducers({
        state: reducers
    }),
    Window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);