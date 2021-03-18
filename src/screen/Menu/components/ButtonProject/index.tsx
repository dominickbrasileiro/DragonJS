import React, { MouseEventHandler, ReactNode } from 'react'
import {
    Container
} from './style'

interface ButtonProjectProps {
    top: number;
    space: number; // padding-right (px)
    children: ReactNode,
    onPress: Function;
}

function ButtonProject({ children, top, space, onPress }: ButtonProjectProps) {
    return (
            <Container onClick={ () => onPress() } top={ top } space={ space } >
                { children }
            </Container>
    )
}

export default ButtonProject