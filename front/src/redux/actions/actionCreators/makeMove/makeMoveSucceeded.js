import {actions} from "../../actions";

export const makeMoveSucceeded = (gameData) => {
    return { type: actions.MAKE_MOVE_SUCCEEDED, gameData: gameData };
};
