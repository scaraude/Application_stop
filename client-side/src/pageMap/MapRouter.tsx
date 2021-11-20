import React from "react";
import { Route, Switch } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const MapRouter = () => (
    <Switch>
        <Route path="/spot-details">
            <Sidebar />
        </Route>
    </Switch>
)