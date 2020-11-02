import {call, put} from "redux-saga/effects";
import {HistoryAPI} from "../../api/api";
import {actions} from "../actions/actions";
import {fetchHistorySucceeded} from "../actions/actionCreators/fetchHistory/fetchHistorySucceeded";
import {resetHistorySucceeded} from "../actions/actionCreators/resetHistory/resetHistorySucceeded";

export function* fetchHistory() {
    try {
        const historyData = yield call(HistoryAPI.getGameHistory);
        yield put(fetchHistorySucceeded(historyData.result));
    } catch (e) {
        yield put({type: actions.FETCH_BOARD_FAILED})
    }
}

export function* resetHistory() {
    try {
        const historyData =  yield call(HistoryAPI.resetGameHistory);
        yield put(resetHistorySucceeded(historyData.result));
    } catch (e) {
        yield put({type: actions.FETCH_BOARD_FAILED})
    }
}
