import React, { useCallback } from 'react'
import { remote } from 'electron'
import {
    Container, LeftBar, TopBar
} from './style'
import {
    ButtonContainer,
    MaximizeIcon,
    MenuRight,
    MinusIcon,
    XIcon 
} from '../Editor/components/Header/style'
import icon from '../../assets/images/logo.png'
import RecentFiles from './components/RecentFiles'
import ButtonProject from './components/ButtonProject'
import {
    FiFile,
    FiFilePlus,
} from 'react-icons/fi'
import {
    BiFolder,
    BiFolderOpen
} from 'react-icons/Bi'

function Menu () {
    const window = remote.getCurrentWindow()
    window.setSize(700, 500)

    //menu actions 
    const handleMinimize = useCallback(() => {
        const window = remote.getCurrentWindow()

        window.minimize()
    }, [])

    const handleMaximize = () => {
        alert('impossible to maximize this window')
    }
       

    const handleCloseWindow = useCallback(() => {
        const window = remote.getCurrentWindow()
    
        window.close()
    }, [])
    return (
        <Container>
            <TopBar>
                <img src={ icon } alt="icon" />

                <span>DragonJS</span>

                <MenuRight>
                    <ButtonContainer backgroundColor="rgba(200, 200, 200, 0.8)" >
                        <MinusIcon onClick={ handleMinimize } />
                    </ButtonContainer>

                    <ButtonContainer backgroundColor="rgba(200, 200, 200, 0.8)">
                        <MaximizeIcon onClick={ () => handleMaximize() } />
                    </ButtonContainer>

                    <ButtonContainer backgroundColor="red">
                        <XIcon onClick={ handleCloseWindow } />
                    </ButtonContainer>
                </MenuRight>
            </TopBar>

            <LeftBar>
                <ButtonProject space={ 30 } top={ 20 }>
                    <FiFile />
                    <span>Open File</span>
                </ButtonProject>

                <ButtonProject  space={ 31 } top={ 50 }>
                    <FiFilePlus />
                    <span>New File</span>
                </ButtonProject>

                <ButtonProject space={ 20 } top={ 80 }>
                    <BiFolder />
                    <span>New Project</span>
                </ButtonProject>

                <ButtonProject space={ 20 } top={ 110 }>
                    <BiFolderOpen />
                    <span>Open Project</span>
                </ButtonProject>
                <RecentFiles/>
            </LeftBar>
        </Container>
    )
}

export default Menu