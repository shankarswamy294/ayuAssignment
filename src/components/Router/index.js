import React, { Suspense, lazy } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const HomePage = lazy(() => import('../HomePage'));
const DetailedView = lazy(() => import('../DetailedView'));

export default function AppRouter() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/DetailedView">
                        <DetailedView/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}