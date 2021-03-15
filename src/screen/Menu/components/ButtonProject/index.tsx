import React, { ReactNode } from 'react'
import {
    Container
} from './style'

interface ButtonProjectProps {
    top: number;
    space: number; // padding-right (px)
    children: ReactNode
}

function ButtonProject({ children, top, space }: ButtonProjectProps) {
    return (
        <Container top={ top } space={ space } >
            { children }
        </Container>
    )
}

export default ButtonProject