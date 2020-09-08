import ActionType from "redux/actionType";
import { CountState, CountActions } from "./count.types";

const initialState: CountState = {
    count: 1,
};

const countReducers = (
    state: CountState = initialState,
    action: CountActions
) => {
    switch (action.type) {
        case ActionType.CHANGE_PRESS_COUNT:
            return { ...state, count: state.count + action.payload.offset };

        default:
            return state;
    }
};

export default countReducers;
