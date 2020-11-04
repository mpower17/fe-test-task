import {actions} from "../actions/actions";

let initialState = {
    board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    winner: null,
    end: false,
    log: [

    ]
}

let getAIIndex = (previousBoard, currentBoard, ai) => {
    let boardPrev = [].concat(previousBoard[0], previousBoard[1], previousBoard[2]);
    let boardCurr = [].concat(currentBoard[0], currentBoard[1], currentBoard[2]);

    for (let i = 0; i < boardPrev.length; i++) {
        debugger
        if (boardPrev[i] !== boardCurr[i] && boardCurr[i] === ai) {
            return i;
        }
    }
}

let getAIIndexNewGame = (board, ai) => {
    let boardCurr = [].concat(board[0], board[1], board[2]);

    for (let i = 0; i < boardCurr.length; i++) {
        if (boardCurr[i] === ai) {
            return i;
        }
    }
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_BOARD_SUCCEEDED:
            return {
                ...state,
                board: action.board,
                winner: action.winner,
                end: action.end
            };
        case actions.MAKE_MOVE_SUCCEEDED:
            let aiIndex = getAIIndex(state.board, action.board, action.ai);
            aiIndex++;
            return {
                ...state,
                board: action.board,
                winner: action.winner,
                end: action.end,
                log: aiIndex ? [...state.log, {
                    who: "ai",
                    index: aiIndex
                }] : [...state.log]
            }

        case actions.NEW_GAME_SUCCEEDED:
            let index = getAIIndexNewGame(action.board, action.ai);
            index++;
            return {
                ...state,
                board: action.board,
                end: false,
                log: index ? [{
                    who: "ai",
                    index: index
                }] : []
            }

        case actions.RESET_GAME_SUCCEEDED:
            return {
                ...state,
                board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                log: []
            }

        case actions.UPDATE_LOG:
            return {
                ...state,
                log: [...state.log, {
                    who: action.who,
                    index: action.index
                }]
            }
        default:
            return state
    }
}
