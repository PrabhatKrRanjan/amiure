import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const Store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;