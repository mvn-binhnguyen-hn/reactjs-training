import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import dateFormat from "utils/dateFormat";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfileScreen from "screens/ProfileScreen/ProfileScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";

function App() {
    dateFormat();
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile" component={ProfileScreen}></Route>
                <Route path="/" component={HomeScreen}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
