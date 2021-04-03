import React from 'react'
import CodeEditor from './components/CodeEditor'
import Header from './components/Header'
import MenuLeft from './components/MenuLeft'

import { Container } from './style'

function Editor () {
    return (
        <>
            <Header/>
            <Container>
                <MenuLeft/>
                <CodeEditor/>
            </Container>
        </>
    )
}

export default Editor