import {actions} from "../../actions";

export const makeMoveSucceeded = (board) => {
    return { type: actions.MAKE_MOVE_SUCCEEDED, board: board };
};
