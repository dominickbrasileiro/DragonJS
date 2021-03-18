import React from 'react'
import {
    Container
} from './style'

interface DivisorProps {
    title: string,
    lineSize: number
}

function Divisor({ title, lineSize }: DivisorProps) {
    return (
        <Container lineSize={ lineSize }>
            <hr/>
            <span>{ title }</span>
            <hr/>
        </Container>
    )
}

export default Divisor