import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import dateFormat from "utils/dateFormat";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfileScreen from "screens/ProfileScreen/ProfileScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import store, { persistor } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    dateFormat();
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading</div>} persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/profile"
                            component={ProfileScreen}
                        ></Route>
                        <Route path="/" component={HomeScreen}></Route>
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
