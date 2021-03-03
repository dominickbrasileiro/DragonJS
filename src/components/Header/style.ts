import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 24px;

    display: flex;

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
    font-size: 8px;

    color: #E8E4CE;
`

const MenuRight = styled.div`
    display: flex;
`

export { 
    Container, 
    Title, 
    Menu, 
    Icon, 
    MenuRight, 
    MenuLeft 
}