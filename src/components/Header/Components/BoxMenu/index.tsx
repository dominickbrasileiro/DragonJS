import React, { ReactNode } from 'react'
import { Container } from './style'

interface BoxMenuProps {
    children: ReactNode,
    mouseLeave?: Function // expects to receive a function that will return the state to false by closing a box
}

function BoxMenu ({ children, mouseLeave = () => null }: BoxMenuProps) {
    return (
        <>
            <Container onMouseLeave={ () => {
                mouseLeave()
            } } >
                { children }
            </Container>
        </>   
    )
}

export default BoxMenu