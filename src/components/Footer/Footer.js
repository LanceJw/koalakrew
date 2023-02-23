import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCopyright
} from '@fortawesome/free-solid-svg-icons'

// import Logo from '../../assets/HKKLogo.png'

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 100%;
margin: auto;
height: 1.5rem;
font-size: 12px;
text-transform: uppercase;
`

const Footer = () => {
    return (
        <Container>
            <div>
                <span><FontAwesomeIcon icon={faCopyright}/>2022 Koala Devs. All rights reserved</span>
            </div>
        </Container>
    )
}

export default Footer