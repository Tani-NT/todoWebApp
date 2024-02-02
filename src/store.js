import {combineReducers, createStore} from 'redux';

// import reducers 
import todoReducers from './reducers/todoReducers';

const reducer = combineReducers({todo: todoReducers});

const store = createStore(reducer);

export default store;