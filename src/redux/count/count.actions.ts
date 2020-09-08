import { UpdatePressCountPayload, UpdatePressCountAction } from "./count.types";
import ActionType from "redux/actionType";
import { ThunkAction } from "redux-thunk";

export const updatePressCount = (
    payload: UpdatePressCountPayload
): UpdatePressCountAction => ({
    type: ActionType.CHANGE_PRESS_COUNT,
    payload,
});

export const updatePressCountAsync = (
    payload: UpdatePressCountPayload
): ThunkAction<void, {}, {}, UpdatePressCountAction> => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(updatePressCount(payload));
        }, 1000);
    };
};

const countActions = {
    updatePressCount,
    updatePressCountAsync,
};

export default countActions;
