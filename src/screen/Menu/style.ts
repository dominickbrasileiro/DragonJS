import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #161616;       
    color: #FFF;
`

const TopBar = styled.header`
    position: absolute;
    
    top: 0;
    left: 0;

    width: 100vw;
    height: 20px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    font-size: 10px;

    background-color: #101010;
    border-bottom: rgb(200, 200, 200);  

    -webkit-user-select: none;
    -webkit-app-region: drag;

    div {
        -webkit-app-region: no-drag;
    }

    img {
        width: 18px;
        margin-left: 2px;
    }

    span {
        position: relative; 

        left: 50px;
    }
`

const LeftBar = styled.div`
    width: 20vw;
    height: 100vh;

    display: flex;

    flex-direction: column;

    border-right: 1px solid #262626;

    background-color: #141414;
`

export { Container, TopBar, LeftBar }