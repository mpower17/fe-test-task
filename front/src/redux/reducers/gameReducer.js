import {actions} from "../actions/actions";

let initialState = {
    player: "",
    ai: "",
    board: [[], [], []],
    winner: "",
    team: ""
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
                board: action.board
            }
        default:
            return state
    }
}
