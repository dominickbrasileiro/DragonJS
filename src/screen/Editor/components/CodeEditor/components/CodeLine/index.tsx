import React from 'react'
import { Container, LineNumber } from './style'

interface CodeLineProps {
    lineNumber: number;
}

function CodeLine ({ lineNumber }: CodeLineProps) {
    function firstSpanFocus() {
        document.getElementById('firstspan'+lineNumber)?.focus()
    }

    function createNewSpan(e: any) {
        if(e.key === ' ') {
            document.getElementById('firstspan'+lineNumber)?.blur()
            const span = document.createElement('span')
            span.setAttribute('contenteditable', 'true')
            span.addEventListener('keypress', (e) => createNewSpan(e))
            const element = document.getElementById('line'+lineNumber)
            element?.appendChild(span)
            span.focus()
        }
    }
    return (
        <Container onClick={() => firstSpanFocus()}>
            <LineNumber>
                { lineNumber }
            </LineNumber>
            <span id={'line'+lineNumber}><span 
                id={'firstspan'+lineNumber}
                contentEditable="true" 
                suppressContentEditableWarning
                onKeyPress={ (e) => createNewSpan(e) }
            ></span></span>
        </Container>
    )
}

export default CodeLine