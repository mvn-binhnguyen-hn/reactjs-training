import { combineReducers } from "redux";
import countReducers from "./count/count.reducers";
import userReducers from "./user/user.reducers";

const rootReducers = combineReducers({
    // Reducer list here
    pressCount: countReducers,
    user: userReducers,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
