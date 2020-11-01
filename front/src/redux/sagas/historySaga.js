import {call, put} from "redux-saga/effects";
import {HistoryAPI} from "../../api/api";
import {actions} from "../actions/actions";
import {fetchHistorySucceeded} from "../actions/actionCreators/fetchHistory/fetchHistorySucceeded";

export function* fetchHistory() {
    try {
        debugger
        const gameField = yield call(HistoryAPI.getGameHistory);
        yield put(fetchHistorySucceeded(gameField.result));
    } catch (e) {
        yield put({type: actions.FETCH_BOARD_FAILED})
    }
}
