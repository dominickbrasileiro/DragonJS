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
import TypescriptModal from './screen/Menu/components/RightBar/File/Modal/TypescriptModal'
import HtmlModal from './screen/Menu/components/RightBar/File/Modal/HtmlModal'
import CssModal from './screen/Menu/components/RightBar/File/Modal/CssModal'

function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ Menu } exact />
                <Route path="/editor" component={ Editor } />
                {/* modals */}
                <Route path="/javascriptmodal" component={ JavascriptModal } />
                <Route path="/typescriptmodal" component={ TypescriptModal } />
                <Route path="/htmlmodal" component={ HtmlModal } />
                <Route path="/cssmodal" component={ CssModal } />
            </Switch>
        </Router>
    )
}

export default Routes