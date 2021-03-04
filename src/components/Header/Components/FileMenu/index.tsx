import React, { useState } from 'react'
import BoxMenu from '../BoxMenu'
import { ButtonMenu } from '../styles/style'
import FileMenuExit from './components/FileMenuExit'
import FileMenuNewFile from './components/FileMenuNewFile'
import FileMenuNewWindow from './components/FileMenuNewWindow'
import FileMenuOpenFile from './components/FileMenuOpenFile'
import FileMenuOpenFolder from './components/FileMenuOpenFolder'
import FileMenuSave from './components/FileMenuSave'
import FileMenuSaveAs from './components/FileMenuSaveAs'

function FileMenu() {
    const [ fileBox, setFileBox ] = useState(false)

    return (
        <>
            <ButtonMenu onClick={ () => {
                setFileBox(fileBox => fileBox = true)
            } } >File</ButtonMenu>
            
            { 
                fileBox == true ? ( 
                    <BoxMenu mouseLeave={ () => setFileBox(false) } >
                        <FileMenuNewFile/>
                        <FileMenuNewWindow/>
                        <hr />
                        <FileMenuOpenFile/>
                        <FileMenuOpenFolder/>
                        <hr/>
                        <FileMenuSave/>
                        <FileMenuSaveAs/>
                        <hr/>
                        <FileMenuExit/>
                    </BoxMenu>
                ) : null
            }
        </>
    )
}

export default FileMenu