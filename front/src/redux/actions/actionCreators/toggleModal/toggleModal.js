import {actions} from "../../actions";

export const toggleModal = (toggled) => {
    return { type: actions.TOGGLE_MODAL, toggled: toggled };
};
