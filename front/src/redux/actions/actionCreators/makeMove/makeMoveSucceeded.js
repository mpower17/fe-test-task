import {actions} from "../../actions";

export const makeMoveSucceeded = (board, winner, end, ai) => {
    return { type: actions.MAKE_MOVE_SUCCEEDED, board: board, winner: winner, end: end, ai: ai  };
};
