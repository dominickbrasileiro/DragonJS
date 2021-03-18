import styled from 'styled-components'

interface ContainerProps {
    lineSize: number;
}

const Container = styled.div.attrs((props: ContainerProps) => {})<ContainerProps>`
    display: flex;

    width: 540px;

    align-items: center;
    justify-content: space-between;

    span {
        color: gray;
        font-size: 0.8rem;
    }

    hr {
        width: ${ props => props.lineSize + 'px'};
        height: 0px;
        
        border: 0.5px solid gray;
    }
`

export { Container }