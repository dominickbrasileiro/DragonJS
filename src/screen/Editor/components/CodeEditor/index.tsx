import React from 'react'
import CodeLine from './components/CodeLine'
import { Container } from './style'

function CodeEditor() {
    return (
        <Container>
            <CodeLine lineNumber={ 1 }/>
        </Container>
    )
}

export default CodeEditor