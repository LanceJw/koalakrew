import React, { Fragment, useState, useEffect } from 'react'
// import TehBing from '../../assets/koala1.jpg'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import WhiteKKLogo from '../../assets/WhiteKKLogo.png'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord, faInstagram, 
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    faBars, faTimes, faAngleLeft
} from '@fortawesome/free-solid-svg-icons'


const IdeationData = [
    {
        id: '1',
        // category: 'Marketing',
        title: 'Mint',
        short_description1: '1. 5000 Koalas are now open for mint! Join the Koala Krew.',
        short_description2: 'Mint Price: 1.5 SOL',
        short_description3: 'Presale: ___ UTC',
        short_description4: 'Public Sale: ___ UTC',
        // in_charge: TehBing
    },
    {
        id: '1',
        // category: 'Marketing',
        title: 'Recruitment',
        short_description1: '1. On ____ UTC (a week after mint), every holder will be invited to our exclusive DAO. ',
        // in_charge: TehBing
    },
    {
        id: '1',
        // category: 'Marketing',
        title: 'Krew Brew Execution Begins',
        short_description1: '1. Sourcing of Krew Brew warehouses and finalizing the supply chain process.',
        short_description2: '2. KrewBrewDAO engaged to finalize bottle/can designs and distribution plans. We want to position ourselves as the first NFT-linked beverage',
        // in_charge: TehBing
    },
    {
        id: '1',
        // category: 'Marketing',
        title: 'Launching Krew Brew',
        short_description1: '1. Krew Brew warehouse ready to receive our first batch of inventories.',
        short_description2: '2. Distribution intermediaries finalized & Online store set-up',
        short_description3: '3. Traditional and New Media Marketing (Influencers, Conventional Media Ads)',
        // in_charge: TehBing
    },
    // {
    //     id: '1',
    //     // category: 'Marketing',
    //     title: 'Krew Brew taking over the world!',
    //     short_description1: '1. On ____ UTC (a week after mint), every holder will be invited to our exclusive DAO. ',
    //     // in_charge: TehBing
    // }
]
 
const doing_data = [
    {
        id: '1',
        // category: 'Marketing',
        title: 'Hello World!',
        short_description1: '1. Making our social media debut and kick-starting our marketing campaign.',
        // in_charge: TehBing
    },
]

const completed_data = [
    {
        id: '1',
        // category: 'Marketing',
        title: 'New Beginnings',
        short_description1: '1. Hand-drawing of XXX attributes for the birth of 6,688 unique Koalas.',
        short_description2: '2. Brainstorming of high-level roadmap cum marketing campaigns.',
        short_description3: '3. Executing a feasibility analysis for our Krew Brew coffee business.',
        // in_charge: TehBing
    },
]

const Container = styled.div`
width: 85%;
max-width: 1550px;
display: flex;
flex-direction: column;
margin: auto;
`

const MobileContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
margin: auto;
`

const Box = styled.div`
width: 100%;
margin: 1rem auto 8rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1rem;
`

const MobileBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;
margin: 0rem 0rem 2rem;
`

const Content = styled.div`
height: auto;
border: 2px solid black;
background-color: #272725;
border-radius: 3px;
padding-bottom: 1rem;
`

// const Category = styled.span`
// width: auto;
// height: auto;
// padding: 2px 3px;
// background-color: #F9A602;
// font-size: 12px;
// border-radius: 3px;
// `

const Div = styled.div`
width: 93%;
margin: 12px auto 0px;
background-color: #85857e;
padding: 8px 10px;
border-radius: 3px;
`

const Title = styled.h1`
color: #95befc;
`

const MobileNavContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding: 3rem 0rem 3rem;
`


const MobileNavbar = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: #272725;
z-index: 2;
overflow: hidden;
`

// const styling = {
//     title: {
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '0 5%',
//         margin: '3rem auto',
//         color: '#d9d9d9'
//     }
// }

const Roadmap = () => {

    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { mobileView } = state;
    
      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 1100
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const [open, setOpen] = useState(false)

    const openNavbar = () => {
        setOpen(true)
    }

    const closeNavbar = () => {
        setOpen(false)
    }

    const ConditionalRendering = () => {
        if (open) {
            return (
                <Fragment>
                    <MobileNavbar>
                        <div style={{height: '3rem', display: 'flex', alignItems: 'center'}}>
                            <p style={{marginLeft: '1rem'}} onClick={closeNavbar}><FontAwesomeIcon icon={faAngleLeft} onClick={closeNavbar}/> Back</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                            <img src={WhiteKKLogo} style={{height: '25px', width: '130px', marginTop: '2rem'}} alt='Logo'/>
                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: '1.5rem', gap: '0.6rem'}}>
                                <a href='/' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Home</a>
                                <a href='/#perks' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Perks</a>
                                <a href='/roadmap' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Roadmap</a>
                                <a href='/#kreators' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Kreators</a>
                                <a href='/theforest' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>The Forest</a>
                                <a href='/krewbrew' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Krew Brew</a>
                            </div>
                        </div>
                        <div style={{width: '30%', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem'}}>
                            <a href='https://twitter.com/KoalaKrewNFT' alt='Twitter'><FontAwesomeIcon icon={faTwitter} style={{color: '#d9d9d9'}}/></a>
                            <a href='#' alt='Instagram'><FontAwesomeIcon icon={faInstagram} style={{color: '#d9d9d9'}}/></a>
                            <a href='#' alt='Discord'><FontAwesomeIcon icon={faDiscord} style={{color: '#d9d9d9'}}/></a>
                        </div>
                    </MobileNavbar>
                </Fragment>
            )
        } else if (!open && mobileView) {
            return (
                displayMobile()
            )
        } else {
            return (
                displayDesktop()
            )
        }
    }

    const displayDesktop = () => {
        return (
            <Fragment>
                <Navbar/>
                <Container>
                    <Title>Roadmap</Title>
                    <Box>
                        <Content>
                            <h2 style={{width: '93%', margin: '1rem auto 1rem', color: '#d9d9d9'}}>Ideation</h2>
                            {IdeationData.map((data) => {
                                return (
                                    <Div>
                                        {/* <Category>{data.category}</Category> */}
                                        <h2 style={{margin: '4px 0px 6px', color: 'black'}}>{data.title}</h2>
                                        <p style={{fontSize: '15px', color: 'black'}}>{data.short_description1}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description2}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description3}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description4}</p>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                                            {/* <p><FontAwesomeIcon icon={faSquare} style={{color: 'white', border: 'solid 1px black'}}/></p> */}
                                            {/* <p style={{fontSize: '15px'}}>13 Feb 2022</p> */}
                                            {/* <img src={data.in_charge} alt='TehBing' style={{borderRadius: '50%', height: '40px', width: '40px'}} /> */}
                                        </div>
                                    </Div>
                                )
                            })}
                        </Content>
                        
                        <Content>
                            <h2 style={{width: '93%', margin: '1rem auto 1rem', color: '#d9d9d9'}}>Doing</h2>
                            {doing_data.map((data) => {
                                return (
                                    <Div>
                                        {/* <Category>{data.category}</Category> */}
                                        <h2 style={{margin: '4px 0px 6px', color: 'black'}}>{data.title}</h2>
                                        <p style={{fontSize: '15px', color: 'black'}}>{data.short_description1}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description2}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description3}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description4}</p>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                                            {/* <p><FontAwesomeIcon icon={faSquare} style={{color: 'white', border: 'solid 1px black'}}/></p> */}
                                            {/* <p style={{fontSize: '15px'}}>13 Feb 2022</p> */}
                                            {/* <img src={data.in_charge} alt='TehBing' style={{borderRadius: '50%', height: '40px', width: '40px'}} /> */}
                                        </div>
                                    </Div>
                                )
                            })}
                        </Content>
                        
                        <Content>
                            <h2 style={{width: '93%', margin: '1rem auto 1rem', color: '#d9d9d9'}}>Completed</h2>
                            {completed_data.map((data) => {
                                return (
                                    <Div>
                                        {/* <Category>{data.category}</Category> */}
                                        <h2 style={{margin: '4px 0px 6px', color: 'black'}}>{data.title}</h2>
                                        <p style={{fontSize: '15px', color: 'black'}}>{data.short_description1}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description2}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description3}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description4}</p>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                                            {/* <p><FontAwesomeIcon icon={faSquare} style={{color: 'white', border: 'solid 1px black'}}/></p> */}
                                            {/* <p style={{fontSize: '15px'}}>13 Feb 2022</p> */}
                                            {/* <img src={data.in_charge} alt='TehBing' style={{borderRadius: '50%', height: '40px', width: '40px'}} /> */}
                                        </div>
                                    </Div>
                                )
                            })}
                        </Content>
                    </Box>


                    <Footer />
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <MobileNavContainer>
                    <img src={WhiteKKLogo} style={{height: '25px', width: '130px', marginRight: '2rem'}} alt='Logo'/>
                    {!open && <FontAwesomeIcon icon={faBars} onClick={openNavbar}/>}
                    {open && <FontAwesomeIcon icon={faTimes} onClick={closeNavbar}/>}
                </MobileNavContainer>
                <MobileContainer>
                    <Title style={{marginBottom: '1rem'}}>Roadmap</Title>
                    <MobileBox>
                        <Content>
                            <h2 style={{width: '93%', margin: '1rem auto 1rem', color: '#d9d9d9'}}>Ideation</h2>
                            {IdeationData.map((data) => {
                                return (
                                    <Div>
                                        {/* <Category>{data.category}</Category> */}
                                        <h2 style={{margin: '4px 0px 6px', color: 'black'}}>{data.title}</h2>
                                        <p style={{fontSize: '15px', color: 'black'}}>{data.short_description1}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description2}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description3}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description4}</p>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                                            {/* <p><FontAwesomeIcon icon={faSquare} style={{color: 'white', border: 'solid 1px black'}}/></p> */}
                                            {/* <p style={{fontSize: '15px'}}>13 Feb 2022</p> */}
                                            {/* <img src={data.in_charge} alt='TehBing' style={{borderRadius: '50%', height: '40px', width: '40px'}} /> */}
                                        </div>
                                    </Div>
                                )
                            })}
                        </Content>
                        
                        <Content>
                            <h2 style={{width: '93%', margin: '1rem auto 1rem', color: '#d9d9d9'}}>Doing</h2>
                        </Content>
                        
                        <Content>
                            <h2 style={{width: '93%', margin: '1rem auto 1rem', color: '#d9d9d9'}}>Completed</h2>
                            {completed_data.map((data) => {
                                return (
                                    <Div>
                                        {/* <Category>{data.category}</Category> */}
                                        <h2 style={{margin: '4px 0px 6px', color: 'black'}}>{data.title}</h2>
                                        <p style={{fontSize: '15px', color: 'black'}}>{data.short_description1}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description2}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description3}</p>
                                        <p style={{fontSize: '15px', color: 'black', marginTop: '0.4rem'}}>{data.short_description4}</p>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
                                            {/* <p><FontAwesomeIcon icon={faSquare} style={{color: 'white', border: 'solid 1px black'}}/></p> */}
                                            {/* <p style={{fontSize: '15px'}}>13 Feb 2022</p> */}
                                            {/* <img src={data.in_charge} alt='TehBing' style={{borderRadius: '50%', height: '40px', width: '40px'}} /> */}
                                        </div>
                                    </Div>
                                )
                            })}
                        </Content>
                    </MobileBox>


                    <Footer />
                </MobileContainer>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {ConditionalRendering()}
        </Fragment>
    )
}

export default Roadmap