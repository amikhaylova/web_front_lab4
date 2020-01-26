import React from "react";
import {IndexRoute, Route} from 'react-router';
import Auth from "../Components/Auth";
import Main from "../Components/Main";
import App from "../Components/App";
import Registration from "../Components/Registration";
import NotFound from "../Components/NotFound";
import PointsPage from "../Components/PointsPage";
import {reqAuth} from "../Components/reqAuth";

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Main} />
            <Route path='/login' component={Auth} />
            <Route path='/registration' component={Registration}/>
        </Route>
        <Route path='/points' component={reqAuth(PointsPage)} />
        <Route path='*' component={NotFound} />
    </div>
);