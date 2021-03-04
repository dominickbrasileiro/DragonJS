import React from 'react'
import logo from '../../assets/images/logo.png'
import { Container, Title, Icon, MenuRight, MenuLeft, Menu } from './style'
import details from '../../details.json'

import FileMenu from './Components/FileMenu'
import Editor from './Components/EditorMenu'
import ConfigMenu from './Components/ConfigMenu'
import TerminalMenu from './Components/TerminalMenu'
import PlaygroundMenu from './Components/PlaygroundMenu'
import HelpMenu from './Components/HelpMenu'

// React Icons
import {
    FiMinus,
    FiMaximize2,
    FiX
} from 'react-icons/fi'

function Header () {
    return (
        <Container>
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

            <Title>DragonJS[{details.version}]</Title>

            <MenuRight>
                <FiMinus/>
                <FiMaximize2/>
                <FiX/>
            </MenuRight>
        </Container>
    )
}

export default Header