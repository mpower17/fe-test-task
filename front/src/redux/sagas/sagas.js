import {actions} from "../actions/actions";
import {all, takeEvery} from 'redux-saga/effects'
import {fetchHistory, resetHistory} from "./historySaga";
import {fetchBoard, makeMove, newGame, resetGame} from "./gameSaga";

function* gameSaga() {
    yield all([
        takeEvery(actions.FETCH_BOARD, fetchBoard),
        takeEvery(actions.MAKE_MOVE, makeMove),
        takeEvery(actions.NEW_GAME, newGame),
        takeEvery(actions.RESET_GAME, resetGame),
        takeEvery(actions.FETCH_HISTORY, fetchHistory),
        takeEvery(actions.RESET_HISTORY, resetHistory),
    ]);
}

export default gameSaga;
