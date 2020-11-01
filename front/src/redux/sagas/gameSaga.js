import {call, put} from "redux-saga/effects";
import {GameAPI} from "../../api/api";
import {fetchBoardSucceeded} from "../actions/actionCreators/fetchBoard/fetchBoardSucceeded";
import {actions} from "../actions/actions";
import {makeMoveSucceeded} from "../actions/actionCreators/makeMove/makeMoveSucceeded";

export function* fetchBoard() {
    try {
        const gameField = yield call(GameAPI.getGameField);
        yield put(fetchBoardSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.FETCH_BOARD_FAILED})
    }
}

export function* makeMove(action) {
    try {
        debugger
        const gameField = yield call(GameAPI.makeMove, action.index);
        yield put(makeMoveSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}

export function* newGame() {
    try {
        const res = yield call(GameAPI.nextGame);
        const gameField = yield call(GameAPI.getGameField);
        yield put(fetchBoardSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}
