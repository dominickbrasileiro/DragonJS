import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    font-size: 0.8rem;
`

export const Line = styled.div`
    width: 100%;
    height: 18px;

    overflow: hidden;

    background-color: #3A3A3A;

    span {
        width: 100%;
        height: 18px;

        display: flex;
        overflow: hidden;
    }
`

export const LineNumber = styled.span `

`

export const Cursor = styled.div`
    position: relative;

    left: 80px;

    width: 1px;
    height: 10px;

    background-color: #FFF;
`
