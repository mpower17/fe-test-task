import {call, put} from "redux-saga/effects";
import {GameAPI} from "../../api/api";
import {fetchBoardSucceeded} from "../actions/actionCreators/fetchBoard/fetchBoardSucceeded";
import {actions} from "../actions/actions";
import {makeMoveSucceeded} from "../actions/actionCreators/makeMove/makeMoveSucceeded";
import {newGameSucceeded} from "../actions/actionCreators/newGame/newGameSucceeded";
import {resetGameSucceeded} from "../actions/actionCreators/resetGame/resetGameSucceeded";

export function* fetchBoard() {
    try {
        const gameField = yield call(GameAPI.getGameField);
        yield put(fetchBoardSucceeded(gameField.result.board, gameField.result.winner, gameField.result.end));
    } catch (e) {
        yield put({type: actions.FETCH_BOARD_FAILED})
    }
}

export function* makeMove(action) {
    try {
        const gameField = yield call(GameAPI.makeMove, action.index);
        yield put(makeMoveSucceeded(gameField.result.board, gameField.result.winner, gameField.result.end, gameField.result.ai));
    } catch (e) {
        yield put({type: actions.MAKE_MOVE_FAILED})
    }
}

export function* newGame() {
    try {
        yield call(GameAPI.nextGame);
        const gameField = yield call(GameAPI.getGameField);
        yield put(newGameSucceeded(gameField.result.board, gameField.result.ai));
    } catch (e) {
        yield put({type: actions.NEW_GAME_FAILED})
    }
}

export function* resetGame() {
    try {
        yield call(GameAPI.resetGame);
        const gameField = yield call(GameAPI.getGameField);
        yield put(resetGameSucceeded(gameField.result.board));
    } catch (e) {
        yield put({type: actions.RESET_GAME_FAILED})
    }
}
