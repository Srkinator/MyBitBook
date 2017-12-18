import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import Welcome from "./welcome";

class EntryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row" style={{ marginTop: "100px" }}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <Welcome />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 table">
                    <div>
                        <Link to="/"><h3 className={window.location.hash.indexOf("/register") !== -1 ? "hover loginFormStyle" : "hover checked loginFormStyle"} onClick={this.changeClass} >Log In</h3></Link>
                        <Link to="/register"><h3 className={ window.location.hash.indexOf("/register") !== -1 ? "hover checked loginFormStyle" : "hover l loginFormStyle" }>Register</h3></Link>
                    </div>
                    <div className="switchBoxStyle">
                        <div>
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/register" component={Register} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EntryPage;
