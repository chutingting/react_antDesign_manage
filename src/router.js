import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import Login from "./pages/login"
import Nomatch from "./pages/nomatch"
import Admin from "./admin"
import Buttons from "./pages/ui/buttons"
import FormLogin from "./pages/form/login"
import TableDemo from "./pages/table"

export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={() => 
                        <Admin>
                            <Switch>
                                <Route path="/ui/buttons" component={Buttons} />
                                <Route path="/form/login" component={FormLogin} />
                                <Route path="/table/basic" component={TableDemo} />
                                <Route component={Nomatch}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}