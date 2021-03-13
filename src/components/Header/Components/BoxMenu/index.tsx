import React, { ReactNode } from 'react'
import { Container } from './style'

interface BoxMenuProps {
    children: ReactNode,
    left?: number,
    id: string;
    mouseLeave?: Function // expects to receive a function that will return the state to false by closing a box
}

function BoxMenu ({ children, mouseLeave = () => null, left = 24, id }: BoxMenuProps) {
    return (
        <>
            <Container id={ id } leftPosition={ left } onMouseLeave={ () => {
                mouseLeave()
            } } >
                { children }
            </Container>
        </>   
    )
}

export default BoxMenu