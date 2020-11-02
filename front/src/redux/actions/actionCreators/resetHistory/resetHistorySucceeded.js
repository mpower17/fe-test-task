import {actions} from "../../actions";

export const resetHistorySucceeded = (historyData) => {
    return { type: actions.RESET_HISTORY_SUCCEEDED, historyData: historyData};
};
