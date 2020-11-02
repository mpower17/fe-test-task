import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import gameSaga from "../sagas/sagas";
import {gameReducer} from "../reducers/gameReducer";
import {historyReducer} from "../reducers/historyReducer";
import {modalReducer} from "../reducers/modalReducer";

let reducers = combineReducers({
    gamePage: gameReducer,
    historyPage: historyReducer,
    modal: modalReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = composeEnhancer(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducers, middleware);

sagaMiddleware.run(gameSaga);

export default store;
