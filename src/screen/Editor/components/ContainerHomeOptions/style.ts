import styled from 'styled-components'

const Container = styled.div`
    width: 20vw;
    height: 96.4vh;

    display: flex;

    @media (min-width: 1200px) {
        height: 742px;
    }

    flex-direction: column;

    background-color: #151120;
`

const ButtonProject = styled.button`
    padding: 10px;

    border: 0;
    margin-bottom: 2px;

    background-color: #191427;
    color: #FFF;

    cursor: pointer;

    :hover {
        transition: 0.6s;
        background-color: #191430;
    }
`

export { Container, ButtonProject }