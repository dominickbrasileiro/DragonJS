import styled  from 'styled-components';

const Container = styled.div`
    display: flex;

    align-items: center;

    width: 100%;
    height: 16px;

    font-size: 0.7rem;

    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
`

const Code = styled.span`
    
`

const CursorText = styled.span`
    border: 0.2px solid #fff;

    animation: 0.5s 0.6s blink linear infinite;

    @keyframes blink {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`

export { Container, Code, CursorText }