import {GameAPI} from "../../api/api";
import {actions} from "../actions/actions";
import {call, put, takeEvery, all} from 'redux-saga/effects'
import {fetchBoardSucceeded} from "../actions/actionCreators/fetchBoard/fetchBoardSucceeded";

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
        const gameField = yield call(GameAPI.makeMove, action.index);
        yield put({type: actions.MAKE_MOVE_SUCCEEDED, data: gameField});
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}

function* newGame() {
    try {
        const gameField = yield call(GameAPI.nextGame);
        yield put({type: actions.MAKE_MOVE_SUCCEEDED, data: gameField});
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}
function* gameSaga() {
    yield all([
        takeEvery(actions.FETCH_BOARD, fetchBoard),
        takeEvery(actions.MAKE_MOVE, makeMove),
    ]);
}

export default gameSaga;
