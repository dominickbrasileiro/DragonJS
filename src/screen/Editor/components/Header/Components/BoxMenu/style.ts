import styled from 'styled-components'

interface TagsProps {
    leftPosition: number;   
}

const Container = styled.div.attrs(( props: TagsProps ) => {})<TagsProps>`
    position: absolute;

    top: 24px;
    left: ${ props => props.leftPosition + 'px' };

    background-color: #444787;

    font-size: 10px;

    div {
        padding: 8px;

        display: flex;
        
        justify-content: space-between;
    
        :hover {
            transition: 0.3s;
    
            background-color: #E8E4CE;
            color: #1C1C1C;
        }
    }
`

export { Container }
