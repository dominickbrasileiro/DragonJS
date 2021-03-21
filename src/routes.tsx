import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Menu from './screen/Menu'
import Editor from './screen/Editor'

function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ Menu } exact />
                <Route path="/editor" component={ Editor } />
            </Switch>
        </Router>
    )
}

export default Routes