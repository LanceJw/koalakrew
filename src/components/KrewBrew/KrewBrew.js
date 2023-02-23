import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
    faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import KBLogo from '../../assets/KBLogo.png'

const Container = styled.div`
width: 100%;
height: 95vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const styling = {
    image: {
        height: '150px',
        width: '150px',
        marginBottom: '1.5rem'
    },
    button: {
        padding: '8px 16px',
        textDecoration: 'none',
        color: 'white',
        position: 'fixed',
        left: '0.5%',
        right: '0',
        top: '1.5%'
    }
}

const KrewBrew = () => {
    return (
        <Fragment>
            <a href='/' style={styling.button}><FontAwesomeIcon icon={faAngleLeft}/> Back to Koala Krew</a>
            <Container>
                <img src={KBLogo} style={styling.image} alt='KrewBrew Logo' />
                <h1>Coming Soon!</h1>
            </Container>
        </Fragment>

    )
}

export default KrewBrew