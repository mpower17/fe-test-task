import {actions} from "../actions/actions";

let initialState = {
    board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_BOARD_SUCCEEDED:
            return {
                ...state,
                board: action.board
            };
        case actions.MAKE_MOVE_SUCCEEDED:
            return {
                ...state,
                board: action.board
            }
        case actions.NEW_GAME_SUCCEEDED:
            return {
                ...state,
                board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
            }
        case actions.RESET_GAME_SUCCEEDED:
            return {
                ...state,
                board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
            }
        default:
            return state
    }
}
