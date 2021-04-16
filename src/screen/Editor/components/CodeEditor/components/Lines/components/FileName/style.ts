import styled from 'styled-components'

interface ButtonFileNameProps {
    theme: string;
}

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 25px;

    background-color: #1B1B1B;
`

export const ButtonFileName = styled.button.attrs(( props: ButtonFileNameProps ) => {})<ButtonFileNameProps>`
    width: 100px;
    height: 100%;

    display: flex;

    align-items: center;
    justify-content: space-evenly;

    font-size: 0.7rem;

    color: #9C9C9C;
    background-color: #222222;

    border: 0;
    border-bottom: 1px solid ${ props => props.theme };
`