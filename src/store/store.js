import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import root from './reducers/root';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    root: root
});

let composeEnhancer = compose;

if(__DEV__){
    composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () =>{
    return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
}

export default configureStore;