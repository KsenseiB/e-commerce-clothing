import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const middlewares = [logger];

//a function that gets both a root reducer and also the return value of applying middleware.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares )));

export default store;