import React, { useState } from 'react'
import { files } from '../../../../../../files'
import {
    Container,
    ButtonFileName
} from './style'
import getExtension from './tools/getExtension'
import renderExtensionIcon from './tools/renderExtensionIcon'

function FileName() {
    const [ activeFileState, setActiveFileState ] = useState('index.js')
    function renderItems() {
        if(files.itens.length === 0) return (
            <ButtonFileName theme='#310C6D'>
                undefined
            </ButtonFileName>
        )
        return <>
            { files.itens.map(item => {
                return (   
                        <ButtonFileName 
                            theme={ () => {
                                if(item === activeFileState) return '#310C6D'
                                if(item != activeFileState) return 'transparent'
                            } } 
                            key={ item }>
                            { renderExtensionIcon(getExtension(item)) }
                            
                            { item }
                        </ButtonFileName>
                )
            }) }
        </>
    }
    return (
        <Container>
            { renderItems() }
        </Container>
    )
}

export default FileName