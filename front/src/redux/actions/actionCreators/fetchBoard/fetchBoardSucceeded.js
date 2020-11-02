import {actions} from "../../actions";

export const fetchBoardSucceeded = (board, winner, end) => {
    return { type: actions.FETCH_BOARD_SUCCEEDED, board: board, winner: winner, end: end }
};
