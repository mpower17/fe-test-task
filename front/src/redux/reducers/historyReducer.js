import {actions} from "../actions/actions";

let initialState = {
    historyData: {
        "ai": 0,
        "player": 0,
        "X": 0,
        "O": 0,
        "list": []
    }
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_HISTORY_SUCCEEDED:
            return {
                ...state,
                historyData: action.historyData
            }
        case actions.RESET_HISTORY_SUCCEEDED:
            return {
                ...state,
                historyData: action.historyData
            }
        default:
            return state
    }
}
