import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Home, About, Skills,Experience,Contact } from "../components"
export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/contact" component={Contact} />

            </Switch>
        </Router>

    )
}

