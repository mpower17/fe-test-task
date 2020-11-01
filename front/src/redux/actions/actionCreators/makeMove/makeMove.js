import {actions} from "../../actions";

export const makeMove = (index) => {
    return { type: actions.MAKE_MOVE, index: index };
};
