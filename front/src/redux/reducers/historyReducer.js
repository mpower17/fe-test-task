import {actions} from "../actions/actions";

let initialState = {
    historyData: null
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_HISTORY_SUCCEEDED:
            debugger
            return {
                ...state,
                historyData: action.historyData
            }
        default:
            return state
    }
}
