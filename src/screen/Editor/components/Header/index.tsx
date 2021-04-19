import React, { useCallback } from 'react'
import logo from '../../../../assets/images/logo1.png'

import { Container, Title, Icon, MenuRight, MenuLeft, Menu, ButtonContainer } from './style'
import details from '../../../../details.json'

import FileMenu from './Components/FileMenu'
import Editor from './Components/EditorMenu'
import ConfigMenu from './Components/ConfigMenu'
import TerminalMenu from './Components/TerminalMenu'
import PlaygroundMenu from './Components/PlaygroundMenu'
import HelpMenu from './Components/HelpMenu'

import { remote } from 'electron'
import os from 'os'

import {
    MinusIcon,
    MaximizeIcon,
    XIcon
} from './style'

interface HeaderProps {
    modal?: boolean;
    title?: string;
}

function Header ({ modal, title }: HeaderProps) {
    const handleMinimize = useCallback(() => {
        const window = remote.getCurrentWindow()

        window.minimize()
    }, [])

    const handleMaximize = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        const isMacSystem = os.platform() === 'darwin'
        if (isMacSystem) {
          return window.setFullScreen(!window.isFullScreen())
        }
    
        const { width: currentWidth, height: currentHeight } = window.getBounds()
    
        const {
          width: maxWidth,
          height: maxHeight
        } = remote.screen.getPrimaryDisplay().workAreaSize
    
        const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight
    
        if (!isMaximized) {
          window.maximize()
        } else {
          window.unmaximize()
        }
    }, [])

    const handleCloseWindow = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        window.close()
    }, [])

    return (
        <Container>
            {
                !modal ? (
                    <MenuLeft>
                        <Icon src={ logo } alt="logo" />        
                        <Menu>
                        <FileMenu/>
                        <Editor/>
                        <PlaygroundMenu/>
                        <TerminalMenu/>
                        <ConfigMenu/>
                        <HelpMenu/>
                    </Menu>
                    </MenuLeft>
                ) : null
            }

            {
                !title ? (
                    <Title>DragonJS[{details.version}]</Title>
                ) : (<Title left={ 150 }>{ title }</Title>)
            }

            <MenuRight>
                <ButtonContainer backgroundColor="rgba(255, 255, 255, 0.2)" >
                    <MinusIcon onClick={ handleMinimize } />
                </ButtonContainer>

                <ButtonContainer backgroundColor="rgba(255, 255, 255, 0.2)">
                    <MaximizeIcon onClick={ handleMaximize } />
                </ButtonContainer>

                <ButtonContainer backgroundColor="red">
                    <XIcon onClick={ handleCloseWindow } />
                </ButtonContainer>
            </MenuRight>
        </Container>
    )
}

export default Header