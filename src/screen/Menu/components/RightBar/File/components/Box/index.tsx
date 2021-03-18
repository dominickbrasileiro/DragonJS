import React from 'react'
import { Container } from './style'

interface BoxProps {
    name: string;
    icon: React.ComponentType,
    color: string;
    textColor: string;
}

function Box({ name, icon: Icon, color, textColor }: BoxProps) {
    return (
        <Container color={ color } textColor={ textColor } title={ `create ${ name } file`}>
            <section><Icon/></section>
            <h4>{ name }</h4>
        </Container>
    )
}

export default Box