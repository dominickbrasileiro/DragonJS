import styled from 'styled-components'

interface ContainerProps {
    top: number;
    space: number; // padding-right (px)
}

const Container = styled.div.attrs(( props: ContainerProps ) => {})<ContainerProps>`
    position: absolute;

    top: ${ props => props.top + 'px' };

    width: 139px;
    height: 30px;

    padding-left: 10px;
    padding-right: ${ props => props.space + 'px' };

    display: flex;

    align-items: center;
    justify-content: space-between;

    font-size: 13px;

    background-color: #141414;

    cursor: pointer;

    :hover {
        background-color: #9200D3;
    }
`

export { Container }