import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import sneakerListReducer from './reducers/sneakerReducer';
import sneakerDetailsReducer from './reducers/detailsReducer';
import addToCartReducer from './reducers/addCartReducer';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    sneakerList: sneakerListReducer,
    sneakerDetails: sneakerDetailsReducer,
    addToCart: addToCartReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;
