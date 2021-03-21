import { FiMaximize2, FiMinus, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import CustomAttributes from '../../../../@types/attributes'

const Container = styled.div`
    width: 100vw;
    height: 24px;

    display: flex;

    align-items: center;
    justify-content: space-between;
    
    background-color: #31274A;

    -webkit-user-select: none;
    -webkit-app-region: drag;

    button {
        -webkit-app-region: no-drag;
    }
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
`

const MenuLeft = styled.div`
    display: flex;
`

const Menu = styled.div`
    display: flex;
`

const Title = styled.h1`
    position: relative;

    left: -80px;

    font-size: 8px;

    color: #E8E4CE;
`

const MenuRight = styled.div`
    display: flex;
    
    -webkit-app-region: no-drag;
`

const ButtonContainer = styled.div.attrs(( props: CustomAttributes ) => {})<CustomAttributes>`
    display: flex;

    align-items: center;
    justify-content: center;

    padding: 4px 10px;
    
    :hover {
        background-color: ${ props => props.backgroundColor };
    }
`

const MinusIcon = styled(FiMinus)`

`

const MaximizeIcon = styled(FiMaximize2)`
    font-size: 14px;
`

const XIcon = styled(FiX)`
`

export { 
    Container, 
    Title, 
    Menu, 
    Icon, 
    MenuRight, 
    MenuLeft ,
    MinusIcon,
    MaximizeIcon,
    XIcon,
    ButtonContainer
}