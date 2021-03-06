import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";


/* const sagaMiddleware = createSagaMiddleware( {sagaMonitor});

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? compose(console.tron.createSagaMonitor(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware); */

/* const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null; */
    
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

/* const store = createStore(rootReducer, sagaMonitor);

sagaMiddleware.run(rootSaga); */

export default store;
