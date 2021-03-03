import React, { useState } from 'react'
import { ButtonMenu } from '../styles/style'

function FileMenu() {
    const [ fileBox, setFileBox ] = useState(false)

    return (
        <>
            <ButtonMenu onClick={ () => {
                setFileBox(fileBox => fileBox = true)
            } } >File</ButtonMenu>
            
            { 
                fileBox == true ? (
                    <div>
                        <span>new file</span>
                    </div>
                ) : null
            }
        </>
    )
}

export default FileMenu