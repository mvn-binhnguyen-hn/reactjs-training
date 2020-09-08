import { User, UserActions, FetchUserListPayload } from "./user.types";
import ActionType from "redux/actionType";
import RequestStatus from "utils/requestStatus";
import { ThunkAction } from "redux-thunk";
import apiHelper from "utils/apiHelper";

export const userListStartRequest = (): UserActions => ({
    type: ActionType.USER_UPDATER_STATE,
    payload: {
        fetchUser: {
            requestStatus: RequestStatus.REQUESTING,
            data: null,
            message: null,
        },
    },
});

export const userListStartError = (message: string): UserActions => ({
    type: ActionType.USER_UPDATER_STATE,
    payload: {
        fetchUser: {
            requestStatus: RequestStatus.REQUEST_ERROR,
            data: null,
            message,
        },
    },
});

export const userListStartSuccess = (user: Array<User>): UserActions => ({
    type: ActionType.USER_UPDATER_STATE,
    payload: {
        fetchUser: {
            requestStatus: RequestStatus.REQUEST_SUCCESS,
            data: user,
            message: null,
        },
    },
});

export const fetchUserList = (
    payload: FetchUserListPayload
): ThunkAction<void, {}, {}, UserActions> => {
    return async (dispatch) => {
        dispatch(userListStartRequest());
        setTimeout(async () => {
            try {
                const res = await apiHelper.get(`users?page=${payload.page}`);
                dispatch(userListStartSuccess(res.data.data));
            } catch (error) {
                dispatch(userListStartError(error));
            }
        }, 3000);
    };
};

const userActions = {
    fetchUserList,
};

export default userActions;
