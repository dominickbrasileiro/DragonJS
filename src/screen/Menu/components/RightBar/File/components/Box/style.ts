import styled from 'styled-components'

interface ContainerProps {
    colorBox: string;
    textColor: string;
}

const Container = styled.div.attrs((props: ContainerProps) => {})<ContainerProps>`
    width: 80px;
    height: 80px;

    margin-bottom: 10px;
    box-shadow: 0px 0px 1px #000;

    display: flex;
    
    flex-direction: column;

    align-items: center;
    justify-content: center;

    font-size: 0.8rem;

    background-color: ${ props => props.color };

    color: ${ props => props.textColor };

    cursor: pointer;

    section {
        font-size: 1.2rem;
    }    

    h4 {
        font-size: 0.6rem;

        color: ${ props => props.textColor };
    }
`

export { Container }