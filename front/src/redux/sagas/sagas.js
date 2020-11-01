import {GameAPI} from "../../api/api";
import {actions} from "../actions/actions";
import {call, put, takeEvery, all} from 'redux-saga/effects'
import {fetchBoardSucceeded} from "../actions/actionCreators/fetchBoard/fetchBoardSucceeded";
import {makeMoveSucceeded} from "../actions/actionCreators/makeMove/makeMoveSucceeded";

function* fetchBoard() {
    try {
        const gameField = yield call(GameAPI.getGameField);
        yield put(fetchBoardSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.FETCH_BOARD_FAILED})
    }
}

function* makeMove(action) {
    try {
        debugger
        const gameField = yield call(GameAPI.makeMove, action.index);
        yield put(makeMoveSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}

function* newGame() {
    try {
        const res = yield call(GameAPI.nextGame);
        const gameField = yield call(GameAPI.getGameField);
        yield put(fetchBoardSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}
function* gameSaga() {
    yield all([
        takeEvery(actions.FETCH_BOARD, fetchBoard),
        takeEvery(actions.MAKE_MOVE, makeMove),
        takeEvery(actions.NEW_GAME, newGame),
    ]);
}

export default gameSaga;
