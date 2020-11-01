import {actions} from "../../actions";

export const fetchBoardSucceeded = (board) => {
    return { type: actions.FETCH_BOARD_SUCCEEDED, board: board }
};
