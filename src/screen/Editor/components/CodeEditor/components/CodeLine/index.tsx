import React, { useRef, useState } from 'react'
import { 
    Container, 
    Code, 
    CursorText 
} from './style'

interface CodeLineProps {
    numberLine: number;
}

function CodeLine ({ numberLine }: CodeLineProps) {
    const code = useRef<HTMLSpanElement>(null)

    const [ cursorTextState, setCursorTextState ] = useState(false)

    function removeCursorText () {
        function showOrNotShow(textContent: string) {
            if(textContent = '') {
                console.log('vai porra')
                setCursorTextState(true)
            } if (!textContent){
                setCursorTextState(true)
            } else {
                console.log('salve')
                setCursorTextState(false)
            }

        }

        !code.current?.textContent ? null : showOrNotShow(code.current.textContent)
    }

    function focusSpan() {
        code.current?.focus()

        code.current?.children.length === 0 ? setCursorTextState(true) : null
    }

    return (
        <Container  onClick={ () => focusSpan() }>
            { numberLine }
            <pre> 
                <Code 
                    contentEditable="true" 
                    suppressContentEditableWarning
                    ref={ code }
                    onKeyUp={ () => removeCursorText() }
                > 
                    {
                        cursorTextState === false ? (
                            null
                        ) : (
                            <CursorText contentEditable="false" id="cursorText"></CursorText>
                        )
                    }
                </Code>
            </pre>
        </Container>
    )
}

export default CodeLine