import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    color: #FFF;
    background-color: #151515;

    section {
        position: absolute;

        left: 12px;

        font-size: 0.7rem;

        display: flex;

        align-items: center;

        button { 
            position: relative;

            left: 260px;

            padding: 4px;

            border: 0;
            border-radius: 2px;
            
            color: #FFF;
            background-color: #1F1F1F;
        }
    }
`

export const ContainerOptions = styled.div`
    width: 420px;
    height: 107px;

    margin: 12px;
    padding: 10px;

    background-color: #1C1C1C;

    font-size: 0.7rem;

    tr {
        width: 380px;

        margin-bottom: 10px;

        display: flex;

        justify-content: space-between;

        td {
            width: 170px;

            /* background-color: #1F1F1F; */
            
            display: flex;

            justify-content: flex-start;
        }
    }
    input {
        width: 45px;

        border: 0;

        text-align: right;
        font-size: 0.7rem;

        color: #FFF;
        background-color: #1c1c1c;
    }

    label {
        background-color: #1F1F1F;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        padding: 6px 20px
    }

    #selectDirectory {
        display: none;
    }
`