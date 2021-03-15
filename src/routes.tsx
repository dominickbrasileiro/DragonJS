import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Menu from './screen/Menu'

function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ Menu } exact />
            </Switch>
        </Router>
    )
}

export default Routes