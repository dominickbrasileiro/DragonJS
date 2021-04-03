import React from 'react'
import Box from './components/Box'
import { 
    Container,
    Section
} from './style'

import { 
    DiJavascript, 
    DiHtml5, 
    DiCss3 
} from 'react-icons/di'
import { 
    SiTypescript, 
    SiJson, 
    SiReact, 
    SiVueDotJs, 
    SiGit, 
    SiMarkdown 
} from 'react-icons/si'
import Divisor from './components/Divisor'
import { Link } from 'react-router-dom'
import maximizeWindow from '../../../../tools/maiximizeWindow'
 
function File() {
    return (
        <Container>
            <Divisor title="principal" lineSize={ 240 } />
            <Section>
                <Link to="/editor">

                <Box 
                    name='javascript' 
                    icon={ DiJavascript } 
                    color="#800080" 
                    textColor="#FFF" 
                    onPress={() => {
                        maximizeWindow()  
                    }}
                />
                </Link>

                <Box 
                    name='typescript' 
                    icon={ SiTypescript } 
                    color="#800080" 
                    textColor="#FFF" 
                />

                <Box 
                    name='html' 
                    icon={ DiHtml5 } 
                    color="#800080" 
                    textColor="#FFF" 
                />

                <Box 
                    name='css' 
                    icon={ DiCss3 } 
                    color="#800080" 
                    textColor="#FFF" 
                />

                <Box 
                    name='json' 
                    icon={ SiJson } 
                    color="#800080" 
                    textColor="#FFF" 
                />
            </Section>

            <Divisor title="others" lineSize={ 240 } />
            <Section>
                <Box
                    name='jsx'
                    icon={ SiReact }
                    color="#800080"
                    textColor='#FFF'
                />

                <Box
                    name='tsx'
                    icon={ SiReact }
                    color="#800080"
                    textColor='#FFF'
                />

                <Box
                    name='vue'
                    icon={ SiVueDotJs }
                    color="#800080"
                    textColor='#FFF'
                />

                <Box
                    name='gitignore'
                    icon={ SiGit }
                    color="#800080"
                    textColor='#FFF'
                />

                <Box
                    name='markdown'
                    icon={ SiMarkdown }
                    color="#800080"
                    textColor='#FFF'
                />
            </Section>
        </Container>
    )
}

export default File