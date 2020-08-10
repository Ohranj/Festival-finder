import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home/Home";
import Profile from "./profile/Profile";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="rootContainer">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
