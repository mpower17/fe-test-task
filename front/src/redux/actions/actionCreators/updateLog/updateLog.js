import {actions} from "../../actions";

export const updateLog = (who, index) => {
    return { type: actions.UPDATE_LOG, who: who, index: index };
};
