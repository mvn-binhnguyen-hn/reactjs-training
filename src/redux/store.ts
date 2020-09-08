import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./rootReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["pressCount"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const composeEnhancers =
    (typeof window !== "undefined" &&
        (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
    compose;

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
