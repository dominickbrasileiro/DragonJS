import React from 'react'
import RecentFiles from '../../../Menu/components/RecentFiles'
import { 
    Container,
    ButtonProject
} from './style'

function ContainerHomeOptions() {
    return (
        <Container>
            <ButtonProject>Open Project</ButtonProject>
            <ButtonProject>New Project</ButtonProject>

            <RecentFiles/>
        </Container>
    )
}

export default ContainerHomeOptions