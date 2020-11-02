import {actions} from "../../actions";

export const makeMoveSucceeded = (board, winner, end) => {
    return { type: actions.MAKE_MOVE_SUCCEEDED, board: board, winner: winner, end: end  };
};
