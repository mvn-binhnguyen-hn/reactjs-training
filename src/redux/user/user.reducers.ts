import ActionType from "redux/actionType";
import { UserState, UserActions } from "./user.types";
import RequestStatus from "utils/requestStatus";

const initialState: UserState = {
    fetchUser: {
        requestStatus: RequestStatus.NOT_REQUEST,
        data: null,
        message: null,
    },
};

const userReducers = (state: UserState = initialState, action: UserActions) => {
    switch (action.type) {
        case ActionType.USER_UPDATER_STATE:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export default userReducers;
