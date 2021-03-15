import React from 'react'
import { Container } from './style'
import recentfiles from './recentfiles.json'

function RecentFiles() {
    return (
        <Container>
            <h4>Recent Files: </h4>
            { 
                recentfiles.about === 'there are no recent files' ? (
                    <span>{ recentfiles.about }</span>
                ) : (
                    <span>loading...</span>
                )
            }
        </Container>
    )
}

export default RecentFiles