import React from 'react'
import CodeLine from './components/CodeLine'
import { Container } from './style'

function CodeEditor() {
    return (
        <Container>
            <CodeLine numberLine={ 1 }  />
        </Container>
    )
}

export default CodeEditor