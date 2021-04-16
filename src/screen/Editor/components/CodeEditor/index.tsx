import React from 'react'
import Lines from './components/Lines'
import Terminal from './components/Terminal'

import { Container } from './style'

function CodeEditor() {
    return (
        <Container>
            <Lines/>
            <Terminal/>
        </Container>
    )
}

export default CodeEditor