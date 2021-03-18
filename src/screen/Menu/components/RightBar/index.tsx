import React from 'react'
import { Container } from './style'
import File from './File'

interface RightBarProps {
    show: string;
}

function RightBar({ show }: RightBarProps) {
    function Show() {
        return (
            <div>
                { 
                    show === 'file' ? (
                        <File/>
                    ) : (
                        <span>project</span>
                    )
                }
            </div>
        )
    }
    return (
        <Container>
            {
               show === 'not' ? (
                   <div></div>
               ) : (
                   <Show/>
               )
            }
        </Container>
    )
}

export default RightBar