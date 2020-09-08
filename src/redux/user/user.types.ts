import { AnyAction } from "redux";
import ActionType from "redux/actionType";
import RequestStatus from "utils/requestStatus";

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserState {
    fetchUser: {
        requestStatus: RequestStatus;
        data: Array<User> | null;
        message: string | null;
    };
}

export interface UserUpdateStateAction {
    type: ActionType;
    payload: UserState;
}

export type UserActions = UserUpdateStateAction | AnyAction;

export interface FetchUserListPayload {
    page: number;
}
