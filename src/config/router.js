import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from '../componenet/Home';
import Honeymon from '../componenet/Honeymon';
import Contact from '../componenet/Contact';
import Services from '../componenet/Services';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path="/Services" component={Services} />
                <Route exact path='/Honeymon' component={Honeymon} />
                <Route exact path='/Contact' component={Contact} />

            </Router>

        )
    }
}

export default AppRouter;