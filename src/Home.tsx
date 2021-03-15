import React from 'react'
import ContainerHomeOptions from './components/ContainerHomeOptions'
import DefaultPage from './components/DefaultPage'
import { Container } from './styles/Home'

function Home () {
    return (
        <DefaultPage>
            <Container>
                <ContainerHomeOptions/>
            </Container>
        </DefaultPage>
    )
}

export default Home