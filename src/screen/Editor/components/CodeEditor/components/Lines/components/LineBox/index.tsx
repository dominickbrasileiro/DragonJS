import React, { useState } from 'react'
import {
    Container,
    Cursor,
    Line,
    LineNumber
} from './style'

function LineBox() {
    const [ lineNumberState, setLineNumberState ] = useState(1)
    const [ cursorState, setCursorState ] = useState({
        show: false,
        left: 0
    })
    function renderLines() {
        const elements = {itens: [0]}
        for(let i = 0; i < lineNumberState; i++) {
            i === 0 ? elements.itens.splice(0) : null
            elements.itens.push(i + 1)
        }
        return <>
            {
                lineNumberState >= 0 ? (
                    <>
                        { elements.itens.map(item => {
                            return (
                                <Line key={ item }>
                                    <LineNumber>{ item }</LineNumber>
                                    <span onFocus={() => {
                                        setCursorState({show: true, left: 0})
                                    }}>
                                        { 
                                            cursorState.show == true ? (
                                                <Cursor/>
                                            ) : null
                                        }
                                        <span 
                                            onKeyPress={(e) => {
                                                if(e.key === 'Enter') {
                                                    e.preventDefault()
                                                    setLineNumberState(lineNumberState => lineNumberState = lineNumberState + 1)
                                                }
                                            }}
                                            contentEditable
                                        ></span>
                                    </span>
                                </Line>
                            )
                        }) }
                    </>
                ) : null
            }
        </>
    }
    return (
        <Container>
            { renderLines() }
        </Container>
    )
}

export default LineBox