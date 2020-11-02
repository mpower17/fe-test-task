import {actions} from "../actions/actions";

let initialState = {
    toggled: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_MODAL:
            return {
                ...state,
                toggled: action.toggled
            }
        default:
            return state
    }
}
