import React, { useState } from 'react'
import BoxMenu from '../BoxMenu'
import { ButtonMenu } from '../styles/style'

import EditorMenuTheme from './components/EditorMenuTheme'

import openAndCloseMenu from '../tools/openAndCloseMenu'

function Editor () {
    const [ editorBox, setEditorBox ] = useState(false)

    return (
        <>
            <ButtonMenu onClick={() => {
                openAndCloseMenu('editor')
                setEditorBox(editorBox => editorBox = true)
            }}>Editor</ButtonMenu> 

            {
                editorBox == true ? (
                    <BoxMenu id='editor' mouseLeave={ () => setEditorBox(false) }  left={ 48 } >
                        <EditorMenuTheme/>  
                    </BoxMenu>
                ) : null
            }
        </>
    )
}

export default Editor