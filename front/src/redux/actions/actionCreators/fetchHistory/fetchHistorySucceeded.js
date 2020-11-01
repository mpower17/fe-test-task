import {actions} from "../../actions";

export const fetchHistorySucceeded = (historyData) => {
    return { type: actions.FETCH_HISTORY_SUCCEEDED, historyData: historyData }
};
