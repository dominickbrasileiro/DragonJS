import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Menu from './screen/Menu'
import Editor from './screen/Editor'
// modals
import JavascriptModal from './screen/Menu/components/RightBar/File/Modal/JavascriptModal'

function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ Menu } exact />
                <Route path="/editor" component={ Editor } />
                {/* modals */}
                <Route path="/javascriptmodal" component={ JavascriptModal } />
            </Switch>
        </Router>
    )
}

export default Routes