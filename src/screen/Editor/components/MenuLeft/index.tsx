import React, { useState } from 'react'
import {
    Container
} from './style'

import { DiCode } from 'react-icons/di'
import { FiCodepen } from 'react-icons/fi'

function MenuLeft() {
    const [ heldDown, setHeldDown ] = useState('')

    function setPressEffect(nameButton: string) {
        if(heldDown === nameButton) {
            return 'rgba(255, 255, 255, 0.1)'
        }
    }

    return (
        <Container>
            <section onClick={ () => {
                
            } } >
                <DiCode size={ 35 } />
            </section>
            <section>
                <FiCodepen size={ 24 } />
            </section>
        </Container>
    )   
}

export default MenuLeft