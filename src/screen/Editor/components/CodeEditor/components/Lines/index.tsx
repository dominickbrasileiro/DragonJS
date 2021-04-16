import React from 'react'
import { files } from '../../../../files'
import FileName from './components/FileName'
import LineBox from './components/LineBox'
import {
    Container
} from './style'

function Lines () {
    return (
        <Container>
            <FileName/>
            {
                files.itens.length === 0 ? (
                    <div></div>
                ) : null
            }
            <LineBox/>
        </Container>
    )
}

export default Lines