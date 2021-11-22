import React from "react";
import { Route, Switch } from "react-router-dom";
import { CreateSpot } from "./create/CreateSpot";

export const MapRouter = () => (
    <Switch>
        <Route path="/create">
            <CreateSpot />
        </Route>
    </Switch>
)