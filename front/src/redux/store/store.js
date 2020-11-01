import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import gameSaga from "../sagas/sagas";
import {gameReducer} from "../reducers/gameReducer";

let reducers = combineReducers({
    gamePage: gameReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = composeEnhancer(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducers, middleware);

sagaMiddleware.run(gameSaga);

export default store;
