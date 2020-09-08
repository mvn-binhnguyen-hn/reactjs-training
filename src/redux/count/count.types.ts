import ActionType from "redux/actionType";
import { AnyAction } from "redux";

export interface UpdatePressCountPayload {
    offset: number;
}

export interface CountState {
    count: number;
}

// Actions
export interface UpdatePressCountAction {
    type: ActionType;
    payload: UpdatePressCountPayload;
}

export type CountActions = UpdatePressCountAction | AnyAction;
