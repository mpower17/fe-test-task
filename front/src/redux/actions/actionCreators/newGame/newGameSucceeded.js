import {actions} from "../../actions";

export const newGameSucceeded = (board, ai) => {
    return { type: actions.NEW_GAME_SUCCEEDED, board: board, ai: ai };
};
