import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Profile from "./Profile";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="rootContainer blue-grey lighten-5">
                    <Header />
                    <Switch>
                        <Route path="/" exact />
                        <Route path="/profile" exact component={Profile} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
